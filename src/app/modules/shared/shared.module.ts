import { KendoUiModule } from 'src/app/modules/kendo-ui/kendo-ui.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [KendoUiModule],
  exports: [KendoUiModule]
})
export class SharedModule {}
