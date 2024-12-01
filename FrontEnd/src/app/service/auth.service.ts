import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authuser(user: any) {
   let userArray = [];
  
   const storedUser = localStorage.getItem('user');
   if(storedUser) {
    userArray = JSON.parse(storedUser);
   }
   
   return userArray.find((p: { userName: any; password: any; }) => p.userName === user.userName && p.password === user.password)
  }
}
