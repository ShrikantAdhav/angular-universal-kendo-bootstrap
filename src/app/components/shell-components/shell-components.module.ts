import { HeaderWithOnlyLogoComponent } from './header-with-only-logo/header-with-only-logo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RootShellComponent } from './root-shell/root-shell.component';
import { ShellHeaderAndFooterComponent } from './shell-header-and-footer/shell-header-and-footer.component';
import { ShellHeaderWithOnlyLogoComponent } from './shell-header-with-only-logo/shell-header-with-only-logo.component';
import { ShellOnlyHeaderComponent } from './shell-only-header/shell-only-header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderWithOnlyLogoComponent,
    ShellOnlyHeaderComponent,
    ShellHeaderAndFooterComponent,
    ShellHeaderWithOnlyLogoComponent,
    RootShellComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeaderWithOnlyLogoComponent,
    ShellOnlyHeaderComponent,
    ShellHeaderAndFooterComponent,
    ShellHeaderWithOnlyLogoComponent,
    RootShellComponent
  ]
})
export class ShellComponentsModule { }
