import { Inject } from "@angular/core";
import { AppAvailability } from "@ionic-native/app-availability/ngx";
import { InAppBrowser, InAppBrowserObject } from "@ionic-native/in-app-browser/ngx";
import { Platform } from "@ionic/angular";

@Inject({
    providedIn: 'root'
})
export class OpenNativeApps {
    constructor(
        public platform: Platform,
        private appAvailability: AppAvailability,
        private inAppBrowser: InAppBrowser){ }

  public openApp(appName) {
    let id = "";
    switch (appName) {
      case 'facebook':
        id = "marchiquitaporelbuenvivir";
        this.openFacebook(id);
        break;
      case 'instagram':
        id = "desierto_verde";
        this.openInstagram(id);
        break;
      case 'youtube':
        id = "marchiquitaporelbuenvivir";
        this.openYoutube(id);
        break;
    }
  }

  launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string, username: string) {
    let app: string;
    if (this.platform.is('ios')) {
      app = iosSchemaName;
    } else if (this.platform.is('android')) {
      app = androidPackageName;
    } else {
      let browser: InAppBrowserObject = this.inAppBrowser.create(httpUrl + username, '_system');
      return;
    }
  
    this.appAvailability.check(app).then(
      () => { // success callback
        let browser: InAppBrowserObject = this.inAppBrowser.create(appUrl + username, '_system');
      },
      () => { // error callback
        let browser: InAppBrowserObject = this.inAppBrowser.create(httpUrl + username, '_system');
      }
    );
  }
  
  openInstagram(username: string) {
    this.launchExternalApp('instagram://', 'com.instagram.android', 'instagram://user?username=', 'https://m.instagram.com/', username);
  }
  
  openYoutube(username: string) {
    this.launchExternalApp('youtube://', 'com.youtube.android', 'youtube://user?screen_name=', 'https://m.youtube.com/', username);
  }
  
  openFacebook(username: string) {
    this.launchExternalApp('fb://', 'com.facebook.katana', 'fb://profile/', 'https://m.facebook.com/', username);
  }

}