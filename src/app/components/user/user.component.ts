import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

// Decorator: store meta data and special information
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  // template: '<h2>Maxence Bouret</h2>',
  styleUrls: ['./user.component.css']
  // styles: [`h2 {color: blue}`]
})
export class UserComponent implements OnInit {
  // Properties
  user: User; // Interface

  // Methods
  constructor() {
    console.log('constructor');
  }

  // life cycle hook that is called when component gets initialized (this run after constructor)
  ngOnInit() {
    // These data can be output using string interpolation in user.component.html
    this.user = {
      firstName: 'Maxence',
      lastName: 'Bouret',
      email: 'maxence@gmail.com'
    };
  }
}

// After creating the component, import and add the component to app.module.ts (meeting point for all components)

// To display the component onto the browser, insert <app-user></app-user> to app.component.html
