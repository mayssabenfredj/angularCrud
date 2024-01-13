import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users : User[] = [];

  constructor(private httpClient : HttpClient) { }

  baseUrl = " http://localhost:3000/users"

  getUsers =() : Observable<User[]> =>{
    return this.httpClient.get<User[]>(this.baseUrl);
  }

  deleteUser = (id : number) : Observable<Object> =>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }

  addUser = (user : Object) : Observable<User>=>{
    const options = {
      headers: new HttpHeaders(
        { 'content-type': 'application/json'}
        )
    };
 

return(this.httpClient.post<User>(
  `${this.baseUrl}`,
  user,
  options));

  }

  
  getUserById = (id : number) : Observable<User>=> {
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`)
  }

  editUsers = (user : User) : Observable<User>=>{
    const options = {
      headers: new HttpHeaders({ 'content-type': 'application/json'})
    };
    const body = {
      name : user.name,
      email : user.email,
      password : user.password
    }

    return(this.httpClient.put<User>(`${this.baseUrl}/${user.id}`, body, options));

  }

}
