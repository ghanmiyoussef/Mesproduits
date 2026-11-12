import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';
import { Serviceproduit } from '../service/serviceproduit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produits',
  standalone: false,
  templateUrl: './add-produits.html',
})
export class AddProduits implements OnInit {
  newProduit=new Produit()

constructor(private serviceproduit: Serviceproduit,private router: Router) {
  }
  ngOnInit(): void {
    
  }


 addProduit(){
     /*this.serviceproduit.ajouterProduit(this.newProduit);
    this.router.navigate(['prod']);*/

  };
  
}
