import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './pages/home/home.component';
import {DiscountsComponent} from './pages/discounts/discounts.component';
import {DiscountsDetailsComponent} from './pages/discounts-details/discounts-details.component';
import {ProductsComponent} from './pages/products/products.component';
import {ProductsDetailsComponent} from './pages/products-details/products-details.component';
import {PaymentComponent} from './pages/payment/payment.component';
import {BasketComponent} from './pages/basket/basket.component';
import {AdminComponent} from './admin/admin.component';
import {AdminCategoryComponent} from './admin/admin-category/admin-category.component';
import {AdminProductsComponent} from './admin/admin-products/admin-products.component';
import {AdminDiscountsComponent} from './admin/admin-discounts/admin-discounts.component';
import {AdminOrdersComponent} from './admin/admin-orders/admin-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DiscountsComponent,
    DiscountsDetailsComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    PaymentComponent,
    BasketComponent,
    AdminComponent,
    AdminCategoryComponent,
    AdminProductsComponent,
    AdminDiscountsComponent,
    AdminOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
