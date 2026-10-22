import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Produits } from './produits/produits';
import { AddProduits } from './add-produits/add-produits';
import { Pagenodefond } from './pagenodefond/pagenodefond';

const routes: Routes = [
  {path:'prod',component:Produits },
    {path:'add-prod',component:AddProduits },
    { path: '', redirectTo: 'prod', pathMatch: 'full' },

{ path:"**", component:Pagenodefond }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
