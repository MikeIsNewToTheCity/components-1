import { Component, OnInit } from '@angular/core';
import { ExtrasService } from '../extras.service';

interface ExtrasDisplay {
    name: string;
    price: number;
    imagePath: string;
    checked: boolean;
  }
  
@Component({
  selector: 'app-pizza-extras',
  templateUrl: './pizza-extras.component.html',
  styleUrls: ['./pizza-extras.component.css']
})
export class PizzaExtrasComponent implements OnInit {

  // Magic ctor DI (dependency injection)
  constructor(
    private extraSvc: ExtrasService
  ) { }

  extras: ExtrasDisplay[] = [];

  ngOnInit(): void {
    const ext = this.extraSvc.getExtrasFromWebService();
    console.log(ext);

    this.extras = ext.map(
      x => ({
        ...x
        , checked: false
      })
    );
  }
}
