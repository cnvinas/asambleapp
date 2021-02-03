import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'page-camara',
  templateUrl: 'camara.html',
  styleUrls: ['camara.scss']
})

export class CamaraPage {
  currentImage: any;

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    saveToPhotoAlbum: true
  }

  constructor(public DomSanitizer: DomSanitizer, private camera: Camera) { }

  ngOnInit(){
    console.log(this.currentImage);
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log("Camera issue:" + err);
    });
  }

  createFilename() {
    var d = new Date(),
      n = d.getTime(),
      newFilename = n + ".jpg";
    return newFilename;
  }
}