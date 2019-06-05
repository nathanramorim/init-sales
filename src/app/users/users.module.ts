import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSevice } from './user.service';

@NgModule({
  declarations: [UsersComponent, UserListComponent],
  imports: [
    CommonModule
  ],
  exports:[UsersComponent, UserListComponent],
  providers:[UserSevice]
})
export class UsersModule { }
