import { CommonModule } from '@angular/common';
import { Component, ViewChild, viewChild } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TabsetComponent, TabsModule } from 'ngx-bootstrap/tabs';
import { ProprtyCardComponent } from '../property-card/property-card.component';
import { RouterOutlet,RouterLink,RouterLinkActive, Router } from "@angular/router";
import { Iproperty } from '../Iproperty.interface';
import { IpropertyBase } from '../IpropertyBase.interface';
import { AlertyfyService } from '../../service/alertyfy.service';
import { HousingService } from '../../service/housing.service';

@Component({
  selector: 'app-add-properties',
  standalone: true,
  imports: [FormsModule,CommonModule,TabsModule,ButtonsModule,ProprtyCardComponent,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './add-properties.component.html',
  styleUrl: './add-properties.component.css'
})
export class AddPropertiesComponent {
  @ViewChild('Form') addPropertyForm:NgForm | undefined;
  @ViewChild('formtabs') formtabs: TabsetComponent | undefined;
  FormData: any;
 propertyTypes: Array<string> = ['House','Apartment','Duplex'];
 furnishedTypes: Array<string> = ['Fully','Semi','Duplex'];
 propertyview : IpropertyBase = {
  pID: 0,
   Name: '',
   PType: '',
   Price: 0,
   SellRent: 0,
   Image: '',
   FType: '',
   BHK: 0,
   BuiltArea: 0,
   City: '',
   RTM: 0
 };

 constructor(private alertyfy: AlertyfyService, private router: Router,
             private houseservice: HousingService
 ) {

 }
  selectTab(tabId: number) {
    if (this.formtabs?.tabs[tabId]) {
      this.formtabs.tabs[tabId].active = true;
    }
  }

  onSubmit(formvalues: any){
    console.log('form submitted');
    console.log(this.addPropertyForm);
    console.log(formvalues);
    // let propdata = {pId: this.houseservice.newPropId()};
    formvalues.pID = this.houseservice.newPropId(); 
    localStorage.setItem('propData',JSON.stringify(formvalues));
   this.alertyfy.success('User successfully added property.');

   if(formvalues.SellRent == 1) {
    this.router.navigate(['/']);
   }
   else {
    this.router.navigate(['/rent-property']);
   }
   
  

  }
}
