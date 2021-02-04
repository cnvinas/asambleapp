import { Component, ViewEncapsulation } from '@angular/core';

import { Platform } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OpenNativeApps } from './services/open_native_apps.service';


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
      url: 'noredirect',
      icon: 'logo-facebook'
    },
    {
      title: 'Instagram',
      url: 'noredirect',
      icon: 'logo-instagram'
    },
    {
      title: 'Youtube',
      url: 'noredirect',
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
    private openNativeApps: OpenNativeApps,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

async openLink(name){
  let appName = name.toLowerCase();
  this.openNativeApps.openApp(appName);
}

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
