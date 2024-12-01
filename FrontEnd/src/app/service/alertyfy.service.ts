import { Injectable } from '@angular/core';
import * as alertyfy from 'alertifyjs'

@Injectable({
  providedIn: 'root'
})
export class AlertyfyService {

  constructor() { }

  success(messasge: string){
    alertyfy.success(messasge);
  }

  error(message: string){
    alertyfy.error(message);
  }

  warning(message: string){
    alertyfy.warning(message);
  }
  
}
