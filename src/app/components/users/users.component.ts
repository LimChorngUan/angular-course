import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { DataService } from '../../services/data.service'

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

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe(users => {
      this.users = users
    })
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('not valid');
    } else {
      value.isActive = true;
      value.joined = new Date();
      value.showDetails = false;

      this.dataService.addUser(value);

      this.form.reset();
    }
  }
}
