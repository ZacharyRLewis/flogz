import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {FoodListComponent} from './food/food-list.component';
import {ModalComponent} from './modal/modal.component';

@NgModule({
  declarations: [
    FoodListComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TableModule
  ],
  exports: [
    FoodListComponent,
    ModalComponent,
  ]
})
export class ComponentsModule {
}
