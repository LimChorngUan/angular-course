import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  showUserDetails: boolean = true;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'Maxence',
        lastName: 'Bouret',
        age: 27,
        address: {
          street: 'Carrot',
          houseNumber: 42,
          city: 'Lisbon'
        }
      },
      {
        firstName: 'Amelia',
        lastName: 'Lim',
        age: 24,
        address: {
          street: 'Tomato',
          houseNumber: 18,
          city: 'Berlin'
        }
      },
      {
        firstName: 'Min Sheng',
        lastName: 'Ang'
      }
    ];
  }
}
