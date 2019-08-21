import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { from } from 'rxjs';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { TokenInterceptorService } from './Services/token-interceptor.service';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { ShowAllProductsComponent } from './Admin/show-all-products/show-all-products.component';
import { UpdateProductComponent } from './Admin/update-product/update-product.component';
import { DashboardCatalogComponent } from './dashboard-catalog/dashboard-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginSignupComponent,
    LoginSuccessComponent,
    AddProductComponent,
    ShowAllProductsComponent,
    UpdateProductComponent,
    DashboardCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
