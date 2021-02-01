import { Component, ViewEncapsulation } from '@angular/core';

import { MenuController, Platform, ToastController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  appPages = [    
    
    {
      title: 'Nuestras Redes',
      url: '/app/tabs/redes',
      icon: 'at'
    },
    {
      title: 'Mapa Agroecológico',
      url: '/app/tabs/map',
      icon: 'map'
    },
    {
      title: 'Info útil',
      url: '/app/tabs/info',
      icon: 'information-circle'
    },
    /*{
      title: 'Cámara',
      url: '/app/tabs/camara',
      icon: 'camera'
    },*/
    {
      title: 'La Asamblea',
      url: '/app/tabs/asamblea',
      icon: 'heart'
    }
  ];
  loggedIn = false;
  dark = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
