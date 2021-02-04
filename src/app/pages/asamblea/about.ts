import { Component, OnInit } from '@angular/core';
import { Config } from '@ionic/angular';
import { OpenNativeApps } from '../../services/open_native_apps.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage implements OnInit {
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
    {
      src: "/assets/img/about/charla_publico.jpg",
    },
    {
      title: "Intervenciones barriales",
      desc: "Realizamos intervenciones en espacios populares visibilizando nuestra realidad.",
      src: "/assets/img/about/mural_cara.jpg",
    },
    {
      src: "/assets/img/about/mural_empanada.jpg",
    },
    {
      src: "/assets/img/about/mural_tractor.jpg",
    },
    {
      src: "/assets/img/about/mural_entero_frontal.jpg",
    },
    {
      src: "/assets/img/about/mural_entero.jpg",
    },
    {
      title: "Charlas Abiertas",
      desc: "Organizamos charlas públicas relacionadas a la producción agroecológica y la soberanía alimentaria.",
      src: "/assets/img/about/charla_miriam.jpg",
    },
    {
      src: "/assets/img/about/tambores.jpg",
    },
    {
      src: "/assets/img/about/vecinxs.jpg",
    },
    {
      src: "/assets/img/about/fiesta_balcon_vero_meli_tocando.jpg",
    },
    {
      src: "/assets/img/about/productos.jpg",
    },
    {
      title: "Festival Agroecológico",
      desc: "Organizamos festivales agroecológicos.",
      src: "/assets/img/about/festival.jpg",
    },
    {
      src: "/assets/img/about/festival_2.jpg",
    }
  ]

  constructor( private openNativeApps: OpenNativeApps, public config: Config){}

  async openSocial(appName: string) {
     this.openNativeApps.openApp(appName);
  }

  ngOnInit() {
    this.ios = this.config.get('mode') === 'ios';
  }
}
