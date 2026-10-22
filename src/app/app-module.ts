import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './navbar/navbar';
import { Produits } from './produits/produits';
import { AddProduits } from './add-produits/add-produits';
import { Pagenodefond } from './pagenodefond/pagenodefond';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, Navbar, Produits, AddProduits, Pagenodefond],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
