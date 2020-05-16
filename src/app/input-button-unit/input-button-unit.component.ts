import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  /*template: `
    <input #inputElementRef
           [value]="title"
           (keyup.enter)="onKey($event)">

    <button (click)="changeTitle(inputElementRef.value)">
      Save
    </button>
  `,*/

  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() { }

  ngOnInit() {
    
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }

  onKey(newTitle: any) {
    this.title = newTitle.target.value; 
  }
}