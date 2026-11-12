import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';
import { Serviceproduit } from '../service/serviceproduit';
import { HttpClient } from '@angular/common/http';

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
  produits!: Produit[];

  constructor(private serviceproduit: Serviceproduit) {
  }
  ngOnInit(): void {
    this.getAllProduits();
  }

getAllProduits() {
 
return this.serviceproduit.listeProduit().subscribe(data => {
  this.produits = data;
});

  
}

 
  
  /*supprimerProduit(prod: Produit) {
    let conf = confirm("Etes-vous sûr ?");  
  if (conf){
    this.serviceproduit.supprimerProduit(prod);
  }

  }*/



}


