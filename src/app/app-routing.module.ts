import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path :'',redirectTo:'login',pathMatch:'full'},
  {path : 'login',component:LoginComponent},
  {path : 'signup',component:SignupComponent},
  {path:'',component:TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
