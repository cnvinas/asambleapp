import { Component, OnInit } from '@angular/core';
import { Config } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
  styleUrls: ['./info.scss'],
})
export class InfoPage implements OnInit {
  ios: boolean;

  constructor(public config: Config, private callNumber: CallNumber, private emailComposer: EmailComposer) { }

  ngOnInit() {

    this.ios = this.config.get('mode') === 'ios';
  }

  denunciaTelefonica(num) {
    this.callNumber.callNumber(num, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  enviarEmail(email){
    this.emailComposer.open({
      to: email
    })
  }
  
}
