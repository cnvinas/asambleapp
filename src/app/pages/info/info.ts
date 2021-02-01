import { Component, OnInit } from '@angular/core';
import { Config } from '@ionic/angular';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
  styleUrls: ['./info.scss'],
})
export class InfoPage implements OnInit {
  ios: boolean;
  images = [
    {
      src: "/assets/img/about/somos_pueblos_fumigados.jpg",
    },
    {
      title: "Encuentros Ambientales",
      desc: "Participamos de encuentros ambientales en los que damos charlas sobre el impacto de los agrotóxicos en nuestro ecosistema y nuestra salud.",
      src: "/assets/img/about/charla.jpg",
    },
    
  ]

  constructor(public config: Config) { }
  ngOnInit() {
    this.ios = this.config.get('mode') === 'ios';
  }
}
