import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ListingPage } from '../listing/listing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listingPage = ListingPage

  constructor(public menuCtrl: MenuController, public navCtrl: NavController) {}

  listing(id) {
    this.navCtrl.push(this.listingPage, {id : id});
  }
  
}
