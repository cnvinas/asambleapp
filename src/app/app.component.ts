import { Component, ViewEncapsulation } from '@angular/core';

import { Platform } from '@ionic/angular';

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
      title: 'La Asamblea',
      url: '/app/asamblea',
      icon: 'heart-outline'
    },
    {
      title: 'Facebook',
      url: 'facebook',
      icon: 'logo-facebook'
    },
    {
      title: 'Instagram',
      url: 'instagram',
      icon: 'logo-instagram'
    },
    {
      title: 'Youtube',
      url: 'youtube',
      icon: 'logo-youtube'
    },
    {
      title: 'Agroecología Ya',
      url: 'agroecologiaya',
      icon: 'leaf-outline'
    },
    {
      title: 'Mapa Agroecológico',
      url: 'map',
      icon: 'map-outline'
    },
    {
      title: 'Cámara',
      url: 'camara',
      icon: 'camera-outline'
    },
    {
      title: 'Info útil',
      url: 'info',
      icon: 'information-circle-outline'
    }
  ];

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
