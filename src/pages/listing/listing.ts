import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { InformationPage } from '../information/information';
import { SearchPage } from '../search/search';

/**
 * Generated class for the ListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listing',
  templateUrl: 'listing.html',
})

export class ListingPage {
  
  informationPage = InformationPage;
  searchPage = SearchPage;

  materias = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get('/api/' + this.navParams.get('id'))
    .subscribe( data => {
      this.materias = data['oferta'];
    }, error => {
      console.log(JSON.stringify(error));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListingPage');
  }

  info(materia) {
    this.navCtrl.push(this.informationPage, {materia : materia});
  }

  search() {
    this.navCtrl.push(this.searchPage, {materias : this.materias});
  } 

}
