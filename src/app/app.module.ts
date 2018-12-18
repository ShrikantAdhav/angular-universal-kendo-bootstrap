import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { GotLostPageComponent } from './pages/got-lost-page/got-lost-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { ShellComponentsModule } from './components/shell-components/shell-components.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GotLostPageComponent,
    HomePageComponent,
    UserProfilePageComponent,
    RegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ShellComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
