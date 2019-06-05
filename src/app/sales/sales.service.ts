import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sale } from '../model/sale.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-type':'application/json' }) 
};

@Injectable()
export class SalesService {

  mockUrl = "http://localhost:3000/leilao";

  constructor(
    private http : HttpClient
  ) { }

  getSales():Observable<Sale[]>{ 
    return this.http.get<Sale[]>(this.mockUrl,headerOption);
  }

  insertSale(sale : Sale){
    sale.codigoUsuario = 1;
    return this.http.post(this.mockUrl,sale,headerOption);
  }

  deleteSale(id: number): Observable<Sale>{
    let url = `${this.mockUrl}/${id}`;
    return this.http.delete<Sale>(url, headerOption)
  }

}
