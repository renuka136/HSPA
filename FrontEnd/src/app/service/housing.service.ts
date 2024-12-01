import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Iproperty } from '../property/Iproperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(SellRent: number): Observable<Iproperty[]> {
   return this.http.get('assets/data/propertties.json').pipe(
    map((data: any) => {
      const propertiesArray: Array<Iproperty> = [];
      for(const id in data) {
        if(data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
          propertiesArray.push(data[id]);
        }
      }
      return propertiesArray;
    })
   );
  }

  newPropId() {
    if(localStorage.getItem('pID')) {
      let getPId: any = localStorage.getItem('pID');
      localStorage.setItem('pID',String(+getPId)+ 1);
     
      return getPId;
    } else {
      localStorage.setItem('pID','101');
      return 101;
    }
  }
}
