import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyformComponent } from './myform/myform.component';
import { SuccessComponent } from './success/success.component';


const routes: Routes = [{path:'login',component:LoginComponent},{path:'transaction',component:MyformComponent},
{path:'success',component:SuccessComponent},{path: '', redirectTo: '/login', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
