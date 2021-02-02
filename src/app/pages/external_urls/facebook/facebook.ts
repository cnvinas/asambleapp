import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'page-facebook',
  templateUrl: 'facebook.html',
  styleUrls: ['./facebook.scss']
})
export class FacebookPage implements OnInit {
  url = "https://m.facebook.com/marchiquitaporelbuenvivir";
  target = "_self";
  options = 'toolbar=no';

  constructor(private browser: InAppBrowser) { }

  ngOnInit() {
    this.browser.create(this.url, this.target, this.options);
  }

}