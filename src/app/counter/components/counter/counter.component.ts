import { Component } from "@angular/core";

@Component({

    selector:'app-counter',
    template:`
    
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy(5)">+5</button>
    <button (click)="decreaseBy()">-1</button>
    <button (click)="reset()">Reset</button>

    
    `
})
export class CounterComponent{

  title = 'Mi primera app de Angular';
  public counter:number=10;

  increaseBy(value:number):void {

    this.counter+=value;
  }

  decreaseBy():void {

    this.counter--;
  }

  reset():void {

    this.counter=0;

  }
}