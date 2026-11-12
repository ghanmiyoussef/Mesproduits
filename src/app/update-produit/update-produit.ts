import { Component, OnInit } from '@angular/core';
import { Serviceproduit } from '../service/serviceproduit';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../model/produit';


@Component({
  selector: 'app-update-produit',
  standalone: false,
  styles: ``,
  templateUrl: './update-produit.html',
})
export class UpdateProduit implements OnInit {
  currentProduit = new Produit();
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private produitService: Serviceproduit) {}

  ngOnInit(): void {
    /*this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentProduit);*/

  }

 /* updateProduit() {
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['prod']);


  }*/





}
