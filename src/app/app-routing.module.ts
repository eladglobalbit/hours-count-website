import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HoursPageComponent} from './hours-page/hours-page.component';
const AppRoutes:Routes=[
  {path:'',component:LoginComponent},
  {path:'hours',component:HoursPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
