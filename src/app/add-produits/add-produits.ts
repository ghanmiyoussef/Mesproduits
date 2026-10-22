import { Component } from '@angular/core';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-add-produits',
  standalone: false,
  templateUrl: './add-produits.html',
})
export class AddProduits {
  newProduit=new Produit()
  addProduit(){
    console.log(this.newProduit);

  };
  
}
