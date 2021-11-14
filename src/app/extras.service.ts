import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtrasService {

  constructor() { }

  getExtrasFromWebService() {

    const extrasFromWeb = [
      {
        name: 'Coke'
        , price: 1.75
        , imagePath: 'assets/images/coke.jpg'
      }
      , {
        name: 'Sprite'
        , price: 1.75
        , imagePath: 'assets/images/sprite.jpg'
      }      
      , {
        name: 'Diet Coke'
        , price: 1.75
        , imagePath: 'assets/images/diet.jpg'
      }      
      , {
        name: 'Fanta Orange'
        , price: 1.75
        , imagePath: 'assets/images/fanta.jpg'
      }
    ];

    return extrasFromWeb;
  }
}
