<?php
namespace console\controllers;

use Yii;
use yii\db\Expression;
use yii\helpers\Console;
use yii\rbac\Permission;
use yii\console\Controller;
use console\models\User;

class RbacController extends Controller
{
    protected $roles = [
        ['name' => 'admin', 'description' => ''],
        ['name' => 'worker', 'description' => ''],
        ['name' => 'manager', 'description' => ''],
    ];

    protected $permissions = [
        ['name' => 'login', 'description' => 'Can logged in.', 'children' => [
                ['name' => 'canSeeOwnProfile', 'description' => 'User can see its own profile', 'children' => [
                        ['name' => 'canEditOwnProfile', 'description' => 'User can edit self profile']
                    ]
                ],
                ['name' => 'canSeeUserControlPage', 'description' => 'See all users', 'children' => [
                        ['name' => 'canEditUserProfile', 'description' => 'Can edit user data']
                    ]
                ],
            ]
        ],
    ];

    protected $assignRolesAndPermissions = [
        ['role' => 'admin', 'permissions' => 'all'],
        ['role' => 'worker', 'permissions' => [
                'login', 'canSeeOwnProfile', 'canEditOwnProfile',
            ]
        ]
    ];

    public function actionIndex()
    {
        echo 'Hello' . "\n";
    }

    public function actionCreateRoles()
    {
        try {
            foreach ($this->roles as $roleData) {
                $isRoleExist = Yii::$app->authManager->getRole($roleData['name']);
                if (empty($isRoleExist)) {
                    $role              = Yii::$app->authManager->createRole($roleData['name']);
                    $role->description = $roleData['description'];
                    Yii::$app->authManager->add($role);
                    $this->stdout("Create role - {$roleData['name']} \n", Console::FG_GREEN);
                }
            }

            $this->stdout("Done. \n", Console::FG_GREEN);
            return 0;
        } catch (\Exception $e) {
            $this->stdout($e->getMessage() . "\n", Console::FG_RED);
            return 1;
        }
    }

    public function actionDeleteRoles()
    {
        try {
            Yii::$app->authManager->removeAllRoles();
            $this->stdout("Done. \n", Console::FG_GREEN);
            return 0;
        } catch (\Exception $e) {
            $this->stdout($e->getMessage() . "\n", Console::FG_RED);
            return 1;
        }
    }

    public function actionCreatePermissions()
    {
        try {
            $this->createPermission($this->permissions);
            $this->stdout("Done. \n", Console::FG_GREEN);
            return 0;
        } catch (\Exception $e) {
            $this->stdout($e->getMessage() . "\n", Console::FG_RED);
            return 1;
        }
    }

    /**
     * @param array $permissions
     * @param null|Permission $parentPermission
     * @throws \Exception
     * @throws \yii\base\Exception
     */
    protected function createPermission($permissions, $parentPermission = null)
    {
        foreach ($permissions as $data) {
            $permission = Yii::$app->authManager->getPermission($data['name']);
            if (empty($permission)) {
                $permission              = Yii::$app->authManager->createPermission($data['name']);
                $permission->description = $data['description'];
                Yii::$app->authManager->add($permission);
                $this->stdout("Create permission '{$data['name']}'. \n", Console::FG_GREEN);
            }

            if (! empty($parentPermission)) {
                if (! Yii::$app->authManager->hasChild($parentPermission, $permission)) {
                    Yii::$app->authManager->addChild($parentPermission, $permission);
                    $this->stdout("Create relation for permission '{$parentPermission->name}' -> '{$permission->name}'. \n", Console::FG_GREEN);
                }
            }

            if (! empty($data['children'])) {
                $this->createPermission($data['children'], $permission);
            }
        }
    }

    public function actionDeletePermissions()
    {
        try {
            Yii::$app->authManager->removeAllPermissions();
            $this->stdout("Done. \n", Console::FG_GREEN);
            return 0;
        } catch (\Exception $e) {
            $this->stdout($e->getMessage() . "\n", Console::FG_RED);
            return 1;
        }
    }

    public function actionAssignRolesAndPermissions()
    {
        try {
            foreach ($this->assignRolesAndPermissions as $assign) {
                $role        = Yii::$app->authManager->getRole($assign['role']);
                $permissions = Yii::$app->authManager->getPermissions();

                if (! empty($role)) {
                    if (is_string($assign['permissions']) && $assign['permissions'] === 'all') {
                        foreach ($permissions as $permission) {
                            if (! Yii::$app->authManager->hasChild($role, $permission)) {
                                Yii::$app->authManager->addChild($role, $permission);
                                $this->stdout("Add to role '{$role->name}' permission '{$permission->name}'. \n", Console::FG_GREEN);
                            }
                        }
                    }

                    if (is_array($assign['permissions'])) {
                        foreach ($assign['permissions'] as $name) {
                            if (
                                array_key_exists($name, $permissions) &&
                                ! Yii::$app->authManager->hasChild($role, $permissions[ $name ])
                            ) {
                                Yii::$app->authManager->addChild($role, $permissions[ $name ]);
                                $this->stdout("Add to role '{$role->name}' permission '{$name}'. \n", Console::FG_GREEN);
                            }
                        }
                    }
                } else {
                    throw new \Exception("Role '{$assign['role']}' do not exist.");
                }
            }

            $this->stdout("Done. \n", Console::FG_GREEN);
            return 0;
        } catch (\Exception $e) {
            $this->stdout($e->getMessage() . "\n", Console::FG_RED);
            return 1;
        }
    }

    public function actionAddRoleToUser($roleName, $userName)
    {
        try {
            $role = Yii::$app->authManager->getRole($roleName);
            /** @var User $user */
            $user = User::find()
                ->where(
                    ['username'  => new Expression(':username')],
                    [':username' => $userName]
                )->one();

            if (empty($role))
                throw new \Exception("Role '{$roleName}' do not exist");

            if (empty($user))
                throw new \Exception("User '{$userName}' do not exist");

            $userHasRoles = Yii::$app->authManager->getRolesByUser($user->id);

            if (count($userHasRoles) !== 0) {
                $userHasRoles = json_encode($userHasRoles);
                throw new \Exception("User already has role {$userHasRoles}");
            }

            Yii::$app->authManager->assign($role, $user->id);

            $this->stdout("Assign user '{$user->username}' to role '{$role->name}'. \n", Console::FG_GREEN);
            return 0;
        } catch (\Exception $e) {
            $this->stdout($e->getMessage() . "\n", Console::FG_RED);
            return 1;
        }
    }

    public function actionRemoveRoleFromUser($userName)
    {
        try {
            /** @var User $user */
            $user = User::find()
                ->where(
                    ['username'  => new Expression(':username')],
                    [':username' => $userName]
                )->one();

            if (empty($user))
                throw new \Exception("User '{$userName}' do not exist");

            if (! Yii::$app->authManager->revokeAll($user->id))
                throw new \Exception("Can`t remove role from '{$userName}'.");

            $this->stdout("Done. \n", Console::FG_GREEN);
            return 0;
        } catch (\Exception $e) {
            $this->stdout($e->getMessage() . "\n", Console::FG_RED);
            return 1;
        }
    }
}