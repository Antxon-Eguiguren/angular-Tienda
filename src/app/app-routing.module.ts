import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'shop' },
  { path: 'shop', component: ListaProductosComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
