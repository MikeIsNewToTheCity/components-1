import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-briss-slack-n-tell',
  templateUrl: './briss-slack-n-tell.component.html',
  styleUrls: ['./briss-slack-n-tell.component.css']
})
export class BrissSlackNTellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  classes = [
    "PHP"
    , "JSF"
    , "Agile"
    , "Job Search"
  ];
}
