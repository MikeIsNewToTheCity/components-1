import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdj-roll-dice',
  templateUrl: './tdj-roll-dice.component.html',
  styleUrls: ['./tdj-roll-dice.component.css']
})
export class TdjRollDiceComponent implements OnInit {

  //Dependency Injection
  constructor() { }

  ngOnInit(): void {
  }

  //Finds a Number within given values
  getNumber = (max:number) => {
    const number = Math.trunc(Math.random()*max) + 1;
    return number;
  };

  //Displays Rolled Value in an alert box
  displayRM = (rn:number,dt:number) => {alert(`A D${dt} was rolled.... You got a ${rn}!`)};


  rollDice = (ds:any) => {
    let rn = (this.getNumber(ds));
    this.displayRM(rn,ds);
    console.log(`selected: ${ds} ${rn}`);
  };

  areYouJoking = () => { //You shouldn't be looking at this...
    alert("DUDE! Why would you think a D1 even exists. *crying*");
    //Send user away!
    Object.assign(document.createElement('a'), {
      target: '_blank',
      href: "https://www.youtube.com/watch?v=iik25wqIuFo&ab_channel=Rickroll%2Cbutwithadifferentlink"
    }).click();
  };

}