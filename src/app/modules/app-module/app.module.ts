import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from '../../app-component/app.component';
import { LoginComponent } from '../../pages/login/login.component';
import { GotLostPageComponent } from '../../pages/got-lost-page/got-lost-page.component';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import { UserProfilePageComponent } from '../../pages/user-profile-page/user-profile-page.component';
import { RegistrationPageComponent } from '../../pages/registration-page/registration-page.component';
import { ShellComponentsModule } from '../../components/shell-components/shell-components.module';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { SharedModule } from '../shared/shared.module';

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
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({appId: 'my-app'}),
    BrowserAnimationsModule,
    AppRoutingModule,
    ShellComponentsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
