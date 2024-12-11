import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './sing-up/sing-up.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'sing-up',
        component:SingUpComponent
    }
];
