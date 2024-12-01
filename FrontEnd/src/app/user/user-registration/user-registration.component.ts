import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';
import { AlertyfyService } from '../../service/alertyfy.service';



@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent implements OnInit {
  registrationForms: FormGroup | any
  user: User = {};
  formsubmitted: boolean = false;
  constructor(private fb:FormBuilder,
              private userService: UserService,
              private alertyfy: AlertyfyService) {
  
  }
  ngOnInit(): void {
    // this.registrationForms = new FormGroup({
    //   userName: new FormControl('',Validators.required),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('',Validators.required),
    //   confirmPassword: new FormControl('',Validators.required),
    //   phoneNo: new FormControl('',Validators.maxLength(10))
    // },{validators: this.passwordMatchingValidator});
    this.createUserregistration();

  }

  passwordMatchingValidator(fg: AbstractControl): ValidationErrors | null {
    const password = fg.get('password')?.value;
    const confirmPassword = fg.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notmatched: true };
  }
  
  createUserregistration(){
    this.registrationForms = this.fb.group({
      userName : ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required],
      confirmPassword: ['',Validators.required],
      phoneNo:['',Validators.maxLength(10)]
    },{Validators: this.passwordMatchingValidator});
  }
  get userName() {
    return this.registrationForms.get('userName') as FormControl;
  }
  get email() {
    return this.registrationForms.get('email') as FormControl;
  }
  get password() {
    return this.registrationForms.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registrationForms.get('confirmPassword') as FormControl;
  }
  get phoneNo() {
    return this.registrationForms.get('phoneNo') as FormControl;
  }
  onSubmit() {
    console.log(this.registrationForms);
    this.formsubmitted = true;
    if(this.registrationForms.valid){
      //this.user = Object.assign(this.user, this.registrationForms.value);
      this.userService.addUser(this.userData());
      this.registrationForms.reset();
      this.formsubmitted = false;
      this.alertyfy.success('congrats, you are successfully registered');
    } else {
      this.alertyfy.error('kindly provide the required fields');
    }
   
 }

 userData(): User{
  return this.user = {
    userName: this.userName.value,
    email: this.email.value,
    password: this.password.value,
    phoneNo: this.phoneNo.value
  }

 }

}
