import { Routes } from '@angular/router';
import { SalesComponent } from './sales/sales.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

export const ROUTES: Routes = [
    {path: '', component: LoginComponent },
    {path: 'leilao', component: SalesComponent },
    {path: 'usuarios', component: UsersComponent }
]