import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Dropdown} from 'bootstrap';
import { AlertyfyService } from '../service/alertyfy.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  loggedinUser: string | undefined;
  constructor(private router: Router,private alertyfy: AlertyfyService){

  }
  // loggedIn(){
  //  this.loggedIn = JSON.parse(localStorage.getItem('token') || '{}');
  //  return this.loggedIn;
  // }
  loggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        // If the token is JSON, parse it
        this.loggedinUser = JSON.parse(token);
      } catch (error) {
        // If the token is a plain string, use it directly
        this.loggedinUser = token;
      }
    } else {
      this.loggedinUser = undefined;
    }
    return this.loggedinUser;
  }

  onLogOut(){
    localStorage.removeItem('token');
    this.alertyfy.success("You are logged out !");
  }

  toggle(modalElement: string | Element){
    const modal=new Dropdown(modalElement);
    modal.toggle();
  }
}
