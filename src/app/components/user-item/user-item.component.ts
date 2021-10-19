import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../user-list/user";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent{

  // @ts-ignore
  @Input() user: User;

  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  editMode = false;

  constructor() {
  }

  deleteItem(): void{
    this.delete.emit();
  }

  editItem(): void {
    this.edit.emit();
    this.editMode = false;
  }
}
