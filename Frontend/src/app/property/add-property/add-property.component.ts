import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertybase';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('formTabs') formTabs: TabsetComponent;
  addPropertyForm: FormGroup;
  NextClicked: boolean;


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
    readyToMove: false
  };


  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.CreateAddPropertyForm();
  }

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
        BasicInfo: this.fb.group({
            SellRent: ['1' , Validators.required],
            BHK: [null, Validators.required],
            PType: [null, Validators.required],
            FType: [null, Validators.required],
            Name: [null, Validators.required],
            City: [null, Validators.required]
        }),

        PriceInfo: this.fb.group({
            Price: [null, Validators.required],
            BuiltArea: [null, Validators.required],
            CarpetArea: [null],
            Security: [0],
            Maintenance: [0],
        }),

        AddressInfo: this.fb.group({
            FloorNo: [null],
            TotalFloor: [null],
            Address: [null, Validators.required],
            LandMark: [null],
        }),

        OtherInfo: this.fb.group({
            RTM: [null, Validators.required],
            PossessionOn: [null, Validators.required],
            AOP: [null],
            Gated: [null],
            MainEntrance: [null],
            Description: [null]
        })
    });
}
//-----------------------
// Getter Methoods
//-----------------------
get BasicInfo() {
  return this.addPropertyForm.controls.BasicInfo as FormGroup;
}

get PriceInfo() {
  return this.addPropertyForm.controls.PriceInfo as FormGroup;
}

get AddressInfo() {
  return this.addPropertyForm.controls.AddressInfo as FormGroup;
}

get OtherInfo() {
  return this.addPropertyForm.controls.OtherInfo as FormGroup;
}
// #endregion

// #region <Form Controls>
get SellRent() {
  return this.BasicInfo.controls.SellRent as FormControl;
}

get BHK() {
  return this.BasicInfo.controls.BHK as FormControl;
}

get PType() {
  return this.BasicInfo.controls.PType as FormControl;
}

get FType() {
  return this.BasicInfo.controls.FType as FormControl;
}

get Name() {
  return this.BasicInfo.controls.Name as FormControl;
}

get City() {
  return this.BasicInfo.controls.City as FormControl;
}

get Price() {
  return this.PriceInfo.controls.Price as FormControl;
}

get BuiltArea() {
  return this.PriceInfo.controls.BuiltArea as FormControl;
}

get CarpetArea() {
  return this.PriceInfo.controls.CarpetArea as FormControl;
}

get Security() {
  return this.PriceInfo.controls.Security as FormControl;
}

get Maintenance() {
  return this.PriceInfo.controls.Maintenance as FormControl;
}

get FloorNo() {
  return this.AddressInfo.controls.FloorNo as FormControl;
}

get TotalFloor() {
  return this.AddressInfo.controls.TotalFloor as FormControl;
}

get Address() {
  return this.AddressInfo.controls.Address as FormControl;
}

get LandMark() {
  return this.AddressInfo.controls.LandMark as FormControl;
}

get RTM() {
  return this.OtherInfo.controls.RTM as FormControl;
}

get PossessionOn() {
  return this.OtherInfo.controls.PossessionOn as FormControl;
}

get AOP() {
  return this.OtherInfo.controls.AOP as FormControl;
}

get Gated() {
  return this.OtherInfo.controls.Gated as FormControl;
}

get MainEntrance() {
  return this.OtherInfo.controls.MainEntrance as FormControl;
}

get Description() {
  return this.OtherInfo.controls.Description as FormControl;
}

  onBack() {
    this.route.navigate(['/']);
  }
  onSubmit() {
    this.NextClicked=true;
    if (this.allTabsValid()){
    console.log('Congrats, your property form listed successfully on our site')
    console.log(this.addPropertyForm);
  } else {
    console.log('Please review the form and provide all valid entries')
  }
}

allTabsValid():boolean{
 
  if(this.BasicInfo.invalid) {
    this.formTabs.tabs[0].active=true;
    return false;
  }

  if(this.PriceInfo.invalid){
    this.formTabs.tabs[1].active=true;
    return false;
  }

  if(this.AddressInfo.invalid){
    this.formTabs.tabs[2].active=true;
    return false;
  }

  if(this.OtherInfo.invalid){
    this.formTabs.tabs[3].active=true;
    return false;
  }
  return true;
}

  selectTab(NextTabId: number, IsCurrentTabValid: boolean) {
    this.NextClicked=true;
   if(IsCurrentTabValid){
      this.formTabs.tabs[NextTabId].active = true;
  }
  }

}
