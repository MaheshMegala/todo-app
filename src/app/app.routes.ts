import { Routes } from '@angular/router';
import { DatepipeComponent } from './datepipe/datepipe.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TodolistComponent } from './todolist/todolist.component';

export const routes: Routes = [
    {path:'datepipe', component: DatepipeComponent},
    {path: 'custompipe', component:CustompipeComponent},
    {path: 'reactive', component: ReactiveComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path:'todolist',component:TodolistComponent}

];
