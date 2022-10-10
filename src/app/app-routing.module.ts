import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistributionComponent } from './components/admin/distribution/distribution.component';
import { ProductsComponent } from './components/admin/products/products.component';

const routes: Routes = [
  { path: 'distribution', component: DistributionComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
