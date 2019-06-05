import { Component, OnInit } from '@angular/core';
import { UserSevice } from '../user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  allUsers = [];
  constructor(
    private userService: UserSevice
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.allUsers = data;
      }
    );
  }
}
