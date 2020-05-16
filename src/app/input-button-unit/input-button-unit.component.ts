import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  //templateUrl: './input-button-unit.component.html',
  template: `
    <input 
          class="todo-input"
          #inputElementRef
          [value]="title"
          (keyup.enter)="onKey($event)">

    <button class="btn" (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,

  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  title = 'Hello World';

  constructor() { }

  ngOnInit() {
    
  }

  submitValue(newTitle: string) {
    //this.title = newTitle;
    this.submit.emit(newTitle);
  }

  onKey(newTitle: any) {
    this.title = newTitle.target.value; 
  }

  //(keyup.enter)="onKey($event)">
}