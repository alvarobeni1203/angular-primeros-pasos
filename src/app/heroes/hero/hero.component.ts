import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string='IronMan';
  public age:number=45;
  public capitalizado='New York';

  public getCapitalizedName():string {

    return 'Jose';
  }

  public setAge(age:number) {

    this.age=age;
  }

  public setName(name:string) {

    this.name=name;
  }

  getDescription():string {

    return ` ${this.name} ${this.age}`


  }

}
