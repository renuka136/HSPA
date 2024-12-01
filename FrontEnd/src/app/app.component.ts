import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProprtyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertiesDetailComponent } from './property/properties-detail/properties-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { AddPropertiesComponent } from './property/add-properties/add-properties.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProprtyCardComponent,PropertyListComponent,NavBarComponent,PropertiesDetailComponent,FormsModule,UserLoginComponent,UserRegistrationComponent,ReactiveFormsModule
  ,BsDropdownModule,CommonModule,AddPropertiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[],
  
})
export class AppComponent {
  title = 'my-first-app';
}
