
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/ipropertybase';
import { HousingService } from 'src/app/services/housing.service';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;

  //properties: Array<IPropertyBase>;
  properties: IPropertyBase[];

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()){
      this.SellRent=2;  //Means we are on rent-propert URL else we are on base URL
    }
    this.housingService.getAllProperties().subscribe(
      data => {
        this.properties = data;
        
        console.log(data);
      }, error => {
        console.log('httperror');
      }
    );
  }
}