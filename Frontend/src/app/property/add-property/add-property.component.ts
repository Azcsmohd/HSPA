import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertybase';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  propertyType: Array<string> = ['House', 'Apartment', 'Duplex']
  furnishType: Array<string> = ['Fully', 'Semi', 'Unfurnished']
  regionType: Array<string> = ['East', 'West', 'South', 'North']

  propertyView: IPropertyBase = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    PType: null,
    FType: string,
    Price: number,
    BHK: null;
    BuiltArea: null,
    City: string,
    RTM: number
  };



  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  onBack() {
    this.route.navigate(['/']);
  }
  onSubmit() {

  }
  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }

}
