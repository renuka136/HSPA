import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProprtyCardComponent } from "../property-card/property-card.component";
import { HttpClient } from '@angular/common/http';
import { HousingService } from '../../service/housing.service';
import { Iproperty } from '../Iproperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [CommonModule, ProprtyCardComponent],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit{
  SellRent = 1;
  properties: Array<Iproperty> | undefined ;
  constructor(private housingService: HousingService, private route: ActivatedRoute){
   }
   ngOnInit() {
    if(this.route.snapshot.url.toString()){
      console.log(this.route.snapshot.url.toString());
      this.SellRent = 2;
    }
   this.housingService.getAllProperties(this.SellRent).subscribe({ 
    // data => {
    //   this.properties = data;
    //   console.log(data);
    // }, error => {
    //   console.error(error);
    // }
    
    next: (data) => {this.properties = data;
      let propData:any = localStorage.getItem('propData');
      const newProperty = JSON.parse(propData);
      if(newProperty) {
        this.properties = [newProperty,...this.properties];
      }
    },
  
    error: (err) => console.log(err),
    complete: () => console.log('executed')
    
   });
   }
}
