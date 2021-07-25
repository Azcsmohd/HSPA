import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number;


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.propertyId = +this.route.snapshot.params['id'];
  }
  onSelectNext() {
    this.propertyId += 1;
    this.router.navigate(['property-detail',this.propertyId]);
    this.route.params.subscribe(
      (params)=>{
        this.propertyId=+params['id'];
      }
    );
  }
}
