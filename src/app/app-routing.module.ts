import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaligaComponent } from './laliga/laliga.component';
import { GithubComponent } from './github/github.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { HomeComponent } from './ecommerce/home/home.component';
import { ManagementComponent } from './ecommerce/management/management.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'laliga', component: LaligaComponent},
  {path: 'github', component: GithubComponent},
  {path: 'management', component: ManagementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponent = [LaligaComponent, GithubComponent, EcommerceComponent, HomeComponent, ManagementComponent];
