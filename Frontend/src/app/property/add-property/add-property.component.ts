import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertybase';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  //@ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;
  addPropertyForm: FormGroup;


  propertyType: Array<string> = ['House', 'Apartment', 'Duplex']
  furnishType: Array<string> = ['Fully', 'Semi', 'Unfurnished']
  regionType: Array<string> = ['East', 'West', 'South', 'North']

  propertyView: IPropertyBase = {
    Id: 0,
    Name: '',
    SellRent: 0,
    Price: 0,
    PType: '',
    FType: '',
    BHK: 0,
    BuiltArea: 0,
    City: '',
    RTM: 0
  };


  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.CreateAddPropertyForm();
  }

CreateAddPropertyForm(){
  this.addPropertyForm=this.fb.group({
    BasicInfo: this.fb.group({
    SellRent: [null,Validators.required],
    PType: [null,Validators.required],
    Name: [null,Validators.required]
    }),
    PriceInfo: this.fb.group({
    Price: [null,Validators.required],
    BuiltArea: [null,Validators.required]
    })
  });
}

  onBack() {
    this.route.navigate(['/']);
  }
  onSubmit() {

    console.log('Congrats form submitted')
    console.log('SellRent='+this.addPropertyForm.value.BasicInfo.SellRent);
    console.log(this.addPropertyForm);
  }
  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }

}
