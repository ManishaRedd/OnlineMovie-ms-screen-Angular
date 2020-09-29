import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddScreenComponent } from './add-screen/add-screen.component';
import { LoginComponent } from './login/login.component';
import { UpdateScreenComponent } from './update-screen/update-screen.component';
import { ViewScreenComponent } from './view-screen/view-screen.component';
//this is where we specify all the routes and uri path
//we also used Authguard service canActivate method in constant
const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent,
  },
   {
    path : '/login/add',
    component : AddScreenComponent,
   },
   
    {
      path : '/login/showAll',
      component : ViewScreenComponent
     },
     
     {
       path: 'update/:id',
       component:UpdateScreenComponent
     },
    {
      path : '',
      redirectTo : '/login',
      pathMatch : 'full'
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
