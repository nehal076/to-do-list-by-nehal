import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  /*template: ` 
  <p>
  input-button-unit works!
  The title is: {{ title }}
  </p>

    <input [value]="title"
          (keyup.enter)="changeTitle($event.target.value)">

    <button (click)="changeTitle('Button Clicked!')">Save</button>
  `,*/

  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() { }

  ngOnInit() {
    
  }

  changeTitle(newTitle: any) {
    this.title = newTitle.target.value; 
  }
}