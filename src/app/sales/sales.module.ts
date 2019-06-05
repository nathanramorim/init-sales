import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleListComponent } from './sale-list/sale-list.component';
import { SalesComponent } from './sales.component';
import { SalesService } from './sales.service';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [SalesComponent, SaleListComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[SalesComponent, SaleListComponent],
  providers: [SalesService, SaleListComponent]
})
export class SalesModule { }
