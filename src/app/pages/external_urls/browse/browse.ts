import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { OpenNativeApps } from '../../../services/open_native_apps.service';
@Component({
  selector: 'page-browse',
  templateUrl: 'browse.html',
  styleUrls: ['./browse.scss']
})
export class BrowsePage implements OnInit {
  appName: string = "";
  target: string = "_self";
  options: string = 'location=no,toolbar=no';

  constructor(
    public platform: Platform,
    private route: ActivatedRoute,
    private openNativeApps: OpenNativeApps) { }

  ngOnInit() {
    this.appName = this.route.snapshot.paramMap.get('name');
    this.openSocial(this.appName);
  }

  async openSocial(appName: string) {
    this.openNativeApps.openApp(appName);
  }
}
