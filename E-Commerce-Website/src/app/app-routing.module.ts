import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { AuthGuard } from './guards/auth.guard';
import { AddProductComponent } from './Admin/add-product/add-product.component';

const routes: Routes = [
  {
    path: 'loggedIn',
    component: LoginSuccessComponent,
    canActivate: [AuthGuard]
  },

  {path: 'Admin_Dashboard', component: AddProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
