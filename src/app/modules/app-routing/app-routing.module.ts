import { UserAuthenticationService } from './../../services/user-authentication.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootShellComponent } from '../../components/shell-components/root-shell/root-shell.component';
import { LoginComponent } from '../../pages/login/login.component';
import { GotLostPageComponent } from '../../pages/got-lost-page/got-lost-page.component';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import { ShellHeaderAndFooterComponent } from '../../components/shell-components/shell-header-and-footer/shell-header-and-footer.component';
import { ShellHeaderWithOnlyLogoComponent } from '../../components/shell-components/shell-header-with-only-logo/shell-header-with-only-logo.component';
import { RegistrationPageComponent } from '../../pages/registration-page/registration-page.component';
import { UserProfilePageComponent } from '../../pages/user-profile-page/user-profile-page.component';
import { ShellOnlyHeaderComponent } from '../../components/shell-components/shell-only-header/shell-only-header.component';

const routes: Routes = [
  {
    path: '',
    component: RootShellComponent,
    children: [
      {
        path: '',
        component: ShellHeaderAndFooterComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home'
          },
          {
            path: 'home',
            component: HomePageComponent,
          }
        ],
        canActivate: [UserAuthenticationService]
      },
      {
        path: '',
        component: ShellOnlyHeaderComponent,
        children: [
          {
            path: 'profile',
            component: UserProfilePageComponent,
          }
        ],
        canActivate: [UserAuthenticationService]
      },
      {
        path: '',
        component: ShellHeaderWithOnlyLogoComponent,
        children: [
          {
            path: 'login',
            component: LoginComponent
          },
          {
            path: 'registration',
            component: RegistrationPageComponent
          },
          {
            path: '**',
            component: GotLostPageComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
