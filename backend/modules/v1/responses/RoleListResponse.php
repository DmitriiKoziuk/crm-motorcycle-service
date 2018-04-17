<?php
namespace backend\modules\v1\responses;

class RoleListResponse
{
    protected $roles;

    public function setData(array $roles)
    {
        $this->roles = array_values($roles);
        return $this;
    }

    public function validateData()
    {
        return $this;
    }

    public function getResponse()
    {
        return $this->roles;
    }
}