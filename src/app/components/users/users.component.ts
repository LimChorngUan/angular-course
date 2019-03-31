import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  newUser: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[] = [];
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  // showUserDetails: boolean = false;
  // enableAddUser: boolean = true;
  // notSoUsefulClasses = {};
  // notSoUsefulStyles = {};

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'Maxence',
        lastName: 'Bouret',
        email: 'maxence@gmail.com',
        // age: 27,
        // address: {
        //   street: 'Carrot',
        //   houseNumber: 42,
        //   city: 'Lisbon'
        // },
        // image: 'http://lorempixel.com/600/600/people/2',
        isActive: true,
        // balance: 100,
        joined: new Date('03/09/2018 06:20:00'),
        showDetails: false
      },
      {
        firstName: 'Amelia',
        lastName: 'Lim',
        email: 'amelia@gmail.com',
        // age: 24,
        // address: {
        //   street: 'Tomato',
        //   houseNumber: 18,
        //   city: 'Berlin'
        // },
        // image: 'http://lorempixel.com/600/600/people/1',
        isActive: true,
        // balance: 90.5,
        joined: new Date('04/01/2019 00:12:10'),
        showDetails: false
      },
      {
        firstName: 'Min Sheng',
        lastName: 'Ang',
        email: 'min@gmail.com',
        // age: 70,
        // address: {
        //   street: 'Lao Lang',
        //   houseNumber: 2,
        //   city: 'Penang'
        // },
        // image: 'http://lorempixel.com/600/600/people/3',
        isActive: false,
        // balance: 210,
        joined: new Date('04/18/1992 09:18:00'),
        showDetails: false
      }
    ];

    // this.setNotSoUsefulClasses();
    // this.setNotSoUsefulStyles();
  }

  // addUser() {
  //   this.newUser.isActive = true;
  //   this.newUser.joined = new Date();

  //   this.users.unshift(this.newUser);

  //   this.newUser = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   };
  // }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('not valid');
    } else {
      value.isActive = true;
      value.joined = new Date();
      value.showDetails = false;

      this.users.unshift(value);

      this.form.reset();
    }
  }
  // setNotSoUsefulClasses() {
  //   this.notSoUsefulClasses = {
  //     'btn-success': this.enableAddUser
  //   };
  // }

  // setNotSoUsefulStyles() {
  //   this.notSoUsefulStyles = {
  //     'font-size': this.enableAddUser ? '16px' : '11px'
  //   };
  // }
}
