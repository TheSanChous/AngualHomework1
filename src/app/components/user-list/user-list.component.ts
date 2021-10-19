import { Component, OnInit } from '@angular/core';
import {User} from "./user";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers(): void {
    this.usersService.getUsers()
      .subscribe(data => {
        // edit local users array
        this.users = data
      }, error => alert("Error on load users"));
  }

  addUser(user: User): void {
    this.usersService.addUser(user)
      .subscribe(() => {
          // edit local users array
          this.users.push(user)
        },
        () => alert("Error on add user"));
  }


  delete(user_id: number): void {
    this.usersService.deleteUser(user_id)
      .subscribe(() => {
          // edit local users array
          this.users = this.users.filter(user => user.id !== user_id)
        },
        error => alert("Error on delete user"));
  }

  // This method can lead to error with new users, since their ID is not in the database
  edit(edited_user: User): void {
    this.usersService.updateUser(edited_user)
      .subscribe(() => {
        // edit local users array
        this.users[this.users.findIndex(user => user.id === edited_user.id)] = edited_user;
      },
        error => alert("Error on edit users"));
  }
}
