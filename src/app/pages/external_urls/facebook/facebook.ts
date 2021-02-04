import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { OpenNativeApps } from '../../../services/open_native_apps.service';
@Component({
  selector: 'page-facebook',
  templateUrl: 'facebook.html',
  styleUrls: ['./facebook.scss']
})
export class FacebookPage implements OnInit {
  constructor( private openNativeApps: OpenNativeApps) { }

  ngOnInit() {
      this.openNativeApps.openApp('facebook');
  }

}