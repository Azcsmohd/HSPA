import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPropertyBase } from '../model/ipropertybase';
import { Property } from '../model/property';
import { IProperty } from '../model/iproperty';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getProperty(id: number) {
    return this.getAllProperties().pipe(
      map(propertiesArray=>{
        return propertiesArray.find(p=> p.id === id);
      })
    );
  }

  getAllProperties(SellRent?: number):Observable<IPropertyBase[]> {
    return this.http.get<any[]>('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IPropertyBase> = [];
        const localProperties=JSON.parse(localStorage.getItem('newProp'));
        if (localProperties) {
          for (const id in localProperties) {
            if (SellRent) {
            if (data.hasOwnProperty(id) && localProperties[id].sellRent==SellRent) {
              propertiesArray.push(localProperties[id]);
            }
          } else {
          propertiesArray.push(localProperties[id]);
          }
        }
        }

        for (const id in data) {
          if (SellRent) {
          if (data.hasOwnProperty(id) && data[id].sellRent==SellRent) {
            propertiesArray.push(data[id]);
          }
        } else {
        propertiesArray.push(data[id]);
        }
      }
        return propertiesArray;
      })
    );
   
  }
//add new property in array if newProp exists in local storage
  addProperty(property: Property) {
    let newProp = [property];
    if (localStorage.getItem('newProp')){
      newProp=[property, ...JSON.parse(localStorage.getItem('newProp'))];
    }
    localStorage.setItem('newProp',JSON.stringify(newProp));
  }
  newPropID() {
    if (localStorage.getItem('PID')) {
        localStorage.setItem('PID', String(+localStorage.getItem('PID') + 1));
        return +localStorage.getItem('PID');
    } else {
        localStorage.setItem('PID', '101');
        return 101;
    }
}

}
