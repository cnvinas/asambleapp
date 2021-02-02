import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'page-agroecologiaya',
  templateUrl: 'agroecologiaya.html',
  styleUrls: ['./agroecologiaya.scss']
})
export class AgroecologiaYaPage implements OnInit {

  constructor(private browser: InAppBrowser) {}

    ngOnInit(){
      this.browser.create("https://www.agroecologiaya.org/", "_self", 'toolbar=no');
    }

  }