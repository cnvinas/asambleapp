import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  styleUrls: ['./map.scss']
})
export class MapPage implements OnInit {
  url = "https://www.google.com/maps/d/viewer?mid=1S7F6mZ6byNdSDnx4NYuhk3MdvoEibP1Z&hl=es&ll=-37.95035205048554%2C-57.54862841207529&z=10";
  target = "_self";
  options = 'location=no,toolbar=no';

  constructor(private browser: InAppBrowser) { }

  ngOnInit() {
    this.browser.create(this.url, this.target, this.options);
  }

}