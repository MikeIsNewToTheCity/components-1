import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jdh-addition',
  templateUrl: './jdh-addition.component.html',
  styleUrls: ['./jdh-addition.component.css']
})
export class JdhAdditionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numberOne = 0;

  numberTwo = 0;

  total = 0;

add = () => this.total = this.numberOne + this.numberTwo;
subtract = () => this.total = this.numberOne - this.numberTwo;
devide = () => this.total = this.numberOne / this.numberTwo;
multiply = () => this.total = this.numberOne * this.numberTwo;

}
