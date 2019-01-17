import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from '../app-module/app.module';
import { AppComponent } from './../../app-component/app.component';
@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    AppModule,
    ServerModule,
    ModuleMapLoaderModule, // <-- *Important* to have lazy-loaded routes work
    // ServerTransferStateModule // Freaking Awesome!! 😮 👌 https://medium.com/@hamedbaatour/angular-5-server-side-rendering-with-firebase-step-by-step-guide-ec5f4d8ef38b
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [AppComponent],
})
export class AppServerModule { }
