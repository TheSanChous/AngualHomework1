import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../user-list/user";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {

  @Output() onSubmit = new EventEmitter<User>();

  formData = {
    username: '',
    name: '',
    email: ''
  }

  constructor() {}

  submit() {
    const user: User = {
      id: Math.floor(Math.random() * 10000),
      username: this.formData.username,
      name: this.formData.name,
      email: this.formData.email
    }

    this.onSubmit.emit(user);
  }

}
