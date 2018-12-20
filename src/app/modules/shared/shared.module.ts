import { NgModule } from '@angular/core';
import { KendoUiModule } from './../kendo-ui/kendo-ui.module';

@NgModule({
  imports: [KendoUiModule],
  exports: [KendoUiModule]
})
export class SharedModule {}
