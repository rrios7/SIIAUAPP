import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformationPage } from '../information/information';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  informationPage = InformationPage;

  lista = [];
  materias = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lista = this.navParams.get('materias');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  getItems(ev: any) {
    let query = ev.target.value.toLowerCase();

    this.materias = this.lista.filter(materia => {
      return materia.nombre_materia.toLowerCase().includes(query.toLowerCase()) || materia.profesor.toLowerCase().includes(query.toLowerCase());
    });
  }

  info(materia) {
    this.navCtrl.push(this.informationPage, {materia: materia});
  }
}
