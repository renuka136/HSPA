import { Injectable } from '@angular/core';
import {User} from '../model/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user: User){
    let users: any = [];
    if(localStorage.getItem('user')){
     let olduser : any = localStorage.getItem('user');
     users = JSON.parse(olduser);
     users = [user,...users];
    } else {
      users = [user];
    }
    localStorage.setItem('user',JSON.stringify(users));
   }
}
