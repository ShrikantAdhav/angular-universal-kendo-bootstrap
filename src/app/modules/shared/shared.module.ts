import { UserAuthenticationService } from './../../services/user-authentication.service';
import { NgModule } from '@angular/core';
import { KendoUiModule } from './../kendo-ui/kendo-ui.module';
import { FirebaseModule } from '../firebase/firebase.module';

@NgModule({
  imports: [KendoUiModule, FirebaseModule],
  exports: [KendoUiModule, FirebaseModule],
  providers: [UserAuthenticationService]
})
export class SharedModule {}
