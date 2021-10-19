import {Injectable, OnInit} from '@angular/core';
import {User} from "../components/user-list/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<{}> {
    return this.http.post(this.url, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  updateUser(user: User): Observable<{}> {
    return this.http.put(`${this.url}/${user.id}`, user);
  }

  deleteUser(user_id: number): Observable<{}> {
    return this.http.delete(`${this.url}/${user_id}`);
  }
}
