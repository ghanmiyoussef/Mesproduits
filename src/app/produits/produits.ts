import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';
import { Serviceproduit } from '../service/serviceproduit';

@Component({
  selector: 'app-produits',
  standalone: false,
  templateUrl: './produits.html',
})
/*export class Produits {
  produits: string[];

  constructor() {
    this.produits = ['PC Asus', 'Imprimante Epson',
      'Tablette Samsung'];
  }
}*/
export class Produits implements OnInit {
  produits: Produit[];
  constructor(private serviceproduit: Serviceproduit) {
    this.produits = this.serviceproduit.listeProduit();


    /*this.produits = [
      { idProduit: 1, nomProduit: 'PC Asus', prixProduit: 3000.600, dateCreation: new Date("01/14/2011") },
      { idProduit: 2, nomProduit: 'Imprimante Epson', prixProduit: 450, dateCreation: new Date("12/17/2010") },
      { idProduit: 3, nomProduit: 'Tablette Samsung', prixProduit: 900.123, dateCreation: new Date("02/20/2020") }
    ];*/

  }
  ngOnInit(): void {
    
  }
  deleteProduit(produit: Produit) {
    this.produits=this.produits.filter(p => p.idProduit != produit.idProduit);

}



}


