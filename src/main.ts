import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { AppModule } from './app/modules/app-module/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  // document.addEventListener('DOMContentLoaded', () => {
  //   platformBrowserDynamic().bootstrapModule(AppModule)
  //     .catch(err => console.error(err));
  // });
