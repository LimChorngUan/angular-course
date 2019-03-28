import { Component } from '@angular/core';

// Decorator: store meta data and special information
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  // template: '<h2>Maxence Bouret</h2>',
  styleUrls: ['./user.component.css']
  // styles: [`h2 {color: blue}`]
})
export class UserComponent {
  // Properties
  firstName = 'Maxence';
  lastName = 'Bouret';
  age = 27;

  // Methods
  constructor() {
    this.sayHello();
  }

  sayHello() {
    console.log(`hello ${this.firstName}`);
  }

  hasBirthday() {
    this.age += 1;
  }
}

// After creating the component, import and add the component to app.module.ts (meeting point for all components)

// To display the component onto the browser, insert <app-user></app-user> to app.component.html
