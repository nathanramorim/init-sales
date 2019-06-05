import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-type':'application/json' }) 
};

@Injectable()
export class UserSevice {

  mockUrl = "http://localhost:3000/usuarios";

  constructor(
    private http : HttpClient
  ) { }

  getUsers():Observable<User[]>{ 
    return this.http.get<User[]>(this.mockUrl,headerOption);
  }
}
