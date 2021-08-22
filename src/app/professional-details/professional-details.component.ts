import { Component, OnInit } from '@angular/core';
import { FormGroup,ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import { StoreDetailsService } from '../store-details.service';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.css']
})
/* export class ProfessionalDetailsComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
 */

  export class ProfessionalDetailsComponent implements OnInit 
{

  professionalDetail;

  constructor( private router : Router,public profDetails : StoreDetailsService) { 
    this.professionalDetail = profDetails.professionalDetailsList;
  }

  ngOnInit(): void {
  }

  addNewDetail()
  {
    this.profDetails.addProfDetail();
  }

  removeDetail(index : number)
  {
    this.profDetails.removeDetails(index);
  }

  getFormControl(id : number,controlName : string)
  {
    return this.professionalDetail
    .get(`professional.${id}`) 
    ?.get(controlName) as FormGroup 
  }
  
  

  gotoAttachments(){

    this.router.navigate (['/Attachments']);
    console.log(this.professionalDetail.value);
  }

}
