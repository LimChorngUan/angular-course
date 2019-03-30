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
  enableAddUser: boolean = true;
  notSoUsefulClasses = {};
  notSoUsefulStyles = {};

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
        },
        image: 'http://lorempixel.com/600/600/people/2',
        isActive: true
      },
      {
        firstName: 'Amelia',
        lastName: 'Lim',
        age: 24,
        address: {
          street: 'Tomato',
          houseNumber: 18,
          city: 'Berlin'
        },
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: true
      },
      {
        firstName: 'Min Sheng',
        lastName: 'Ang',
        age: 70,
        address: {
          street: 'Lao Lang',
          houseNumber: 2,
          city: 'Penang'
        },
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: false
      }
    ];

    this.setNotSoUsefulClasses();
    this.setNotSoUsefulStyles();
  }

  setNotSoUsefulClasses() {
    this.notSoUsefulClasses = {
      'btn-success': this.enableAddUser
    };
  }

  setNotSoUsefulStyles() {
    this.notSoUsefulStyles = {
      'font-size': this.enableAddUser ? '16px' : '11px'
    };
  }
}
