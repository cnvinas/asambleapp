import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html',
  styleUrls: ['./youtube.scss']
})
export class YoutubePage implements OnInit {
  url = "https://m.youtube.com/marchiquitaporelbuenvivir";
  target = "_self";
  options = 'toolbar=no';

  constructor(private browser: InAppBrowser) { }

  ngOnInit() {
    this.browser.create(this.url, this.target, this.options);
  }

}