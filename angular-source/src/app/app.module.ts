import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { DebugService } from './shared/services/debug.service';
import { ApiService } from './shared/services/api.service';
import { UserService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';
import { RoleService } from './shared/services/role.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    DebugService,
    ApiService,
    UserService,
    AuthService,
    RoleService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
