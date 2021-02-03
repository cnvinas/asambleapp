import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'page-agroecologiaya',
  templateUrl: 'agroecologiaya.html',
  styleUrls: ['./agroecologiaya.scss']
})
export class AgroecologiaYaPage implements OnInit {
  url = "https://www.agroecologiaya.org/";
  target = "_self";
  options = 'location=no,toolbar=no';

  constructor(private browser: InAppBrowser) { }

  ngOnInit() {
    this.browser.create(this.url, this.target, this.options);
  }
}