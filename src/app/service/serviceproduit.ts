import { Injectable, Service } from '@angular/core';
import { Produit } from '../model/produit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Serviceproduit {
    produits!: Produit[];
    apiUrl: string = 'http://localhost:3000/produits';
    constructor(private http: HttpClient) {
        

}

    listeProduit():Observable<Produit[]> { 
        return this.http.get<Produit[]>(this.apiUrl);
    }
}
   
