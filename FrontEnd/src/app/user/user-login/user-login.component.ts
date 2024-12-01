import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { AlertyfyService } from '../../service/alertyfy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  constructor(private authService: AuthService,
              private alertify: AlertyfyService,
              private router: Router) {
 
  }

  onLogin(loginForm: NgForm){
  console.log(loginForm.value);
   
    const token = this.authService.authuser(loginForm.value);
    console.log(token);
    if(token) {
      localStorage.setItem('token',token.userName);
      this.router.navigate(['/']);
      this.alertify.success('Login successful');
    } else {
      
      this.alertify.error('Login Unsuccessful');
    }
  }
}
