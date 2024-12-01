import { style } from "@angular/animations";
import { Component, Input, input } from "@angular/core";
import { Iproperty } from "../Iproperty.interface";
import { Route, Router } from "@angular/router";
import { RouterOutlet,RouterLink,RouterLinkActive } from "@angular/router";
import { CommonModule } from "@angular/common";
import { IpropertyBase } from "../IpropertyBase.interface";

@Component({
    selector : 'app-proprty-card',
    templateUrl : './property-card.component.html',
    standalone: true,
    styleUrl: './property-card.component.css',
    imports: [RouterOutlet, RouterLink, RouterLinkActive,CommonModule]
    
})

export class ProprtyCardComponent {
    @Input() property: IpropertyBase | any; 
    ngOnInit() {
        console.log('property data',this.property);
    }
   
}