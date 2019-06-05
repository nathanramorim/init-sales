import { Component, OnInit } from '@angular/core';
import { SalesService } from '../sales.service';
import { Sale } from 'src/app/model/sale.model';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent implements OnInit {

  allSales = [];
  constructor(
    private saleService:SalesService
  ) { }

  ngOnInit() {
    this.getSales();
  }

  getSales(){
    this.saleService.getSales().subscribe(
      (data: Sale[]) => {
        this.allSales = data;
       }
    )
  }

  deleteSale(id:number){
    this.saleService.deleteSale(id).subscribe(
      (data: Sale) => {
        this.getSales();
      });
  }

  addSale(sale : Sale){
    this.saleService.insertSale(sale).subscribe(
    (data: Sale)=>{
      this.ngOnInit();
    });
  }

}
