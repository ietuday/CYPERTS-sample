import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
  <div style="margin-bottom:10px;">
  <mat-form-field fxFlex="50">
    <input #myInput matInput placeholder="Something" [(ngModel)]="message">
  </mat-form-field>
    <button mat-raised-button color="primary" (click)="update.emit({text:message})">Click Me!</button>
  </div>
  
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  @Input() message;
  @Output() update = new EventEmitter();

  constructor() { 
    // setInterval(() => {
    //   this.message = Math.random().toString()
    //   console.log(this.message);
      
    // }, 1000);
    
  }

  ngOnInit() {
  }

  onClick(event, value){
    console.log(value);
    console.log(event.target.value);
    
  }

}
