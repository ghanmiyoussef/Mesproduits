import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Produits } from './produits/produits';
import { AddProduits } from './add-produits/add-produits';
import { Pagenodefond } from './pagenodefond/pagenodefond';
import { UpdateProduit } from './update-produit/update-produit';

const routes: Routes = [
  {path:'prod',component:Produits },
    {path:'add-prod',component:AddProduits },
    {path:'updateProduit/:id', component:UpdateProduit },
    { path: '', redirectTo: 'prod', pathMatch: 'full' },
   


{ path:"**", component:Pagenodefond }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
