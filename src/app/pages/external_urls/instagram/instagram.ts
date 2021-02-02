import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'page-instagram',
  templateUrl: 'instagram.html',
  styleUrls: ['./instagram.scss']
})
export class InstagramPage implements OnInit {
  url = "https://m.instagram.com/desierto_verde/";
  target = "_self";
  options = 'toolbar=no';

  constructor(private browser: InAppBrowser) { }

  ngOnInit() {
    this.browser.create(this.url, this.target, this.options);
  }

}