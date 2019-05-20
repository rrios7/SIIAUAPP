import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Menu } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListingPage } from '../pages/listing/listing';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Menu) menuCtrl : Menu;
  @ViewChild(Nav) navCtrl : Nav;

  homePage = HomePage;
  listingPage = ListingPage;
  
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openHome() {
    this.navCtrl.push(this.homePage);
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  listing(id) {
    this.navCtrl.push(this.listingPage, {id : id});
  }
  
}

