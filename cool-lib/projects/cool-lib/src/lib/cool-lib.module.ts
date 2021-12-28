import { NgModule } from '@angular/core';
import { CoolLibComponent } from './cool-lib.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    CoolLibComponent,
    ButtonComponent,
    InputComponent,
    ModalComponent
  ],
  imports: [
  ],
  exports: [
    CoolLibComponent,
    ButtonComponent,
    InputComponent,
    ModalComponent
  ]
})
export class CoolLibModule { }
