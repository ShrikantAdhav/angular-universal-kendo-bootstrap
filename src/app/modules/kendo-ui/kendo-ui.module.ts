import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MenusModule
import { MenuModule } from '@progress/kendo-angular-menu';

// ButtonsModule
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { DropDownButtonModule } from '@progress/kendo-angular-buttons';

// RippleModule
import { RippleModule } from '@progress/kendo-angular-ripple';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuModule,
    ButtonModule,
    DropDownButtonModule,
    RippleModule
  ],
  exports: [
    MenuModule,
    ButtonModule,
    DropDownButtonModule,
    RippleModule
  ]
})
export class KendoUiModule { }
