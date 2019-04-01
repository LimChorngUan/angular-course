import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs'
import { of } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];

  constructor() { 
    this.users = [
      {
        firstName: 'Maxence',
        lastName: 'Bouret',
        email: 'maxence@gmail.com',
        isActive: true,
        joined: new Date('03/09/2018 06:20:00'),
        showDetails: false
      },
      {
        firstName: 'Amelia',
        lastName: 'Lim',
        email: 'amelia@gmail.com',
        isActive: true,
        joined: new Date('04/01/2019 00:12:10'),
        showDetails: false
      },
      {
        firstName: 'Min Sheng',
        lastName: 'Ang',
        email: 'min@gmail.com',
        isActive: false,
        joined: new Date('04/18/1992 09:18:00'),
        showDetails: false
      }
    ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(newUser: User): void {
    this.users.unshift(newUser)
  }
}
