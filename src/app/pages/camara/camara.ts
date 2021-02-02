import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
    selector: 'page-camara',
    templateUrl: 'camara.html',
    styleUrls: ['camara.scss']
})

export class CamaraPage { 
    clickedImage: string;

    options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  
    constructor(private camera: Camera) { }
  
    captureImage() {
      this.camera.getPicture(this.options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.clickedImage = base64Image;
      }, (err) => {
        console.log(err);
        // Handle error
      });
    }
}