import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreDetailsService } from '../store-details.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  

  ngOnInit(): void {
  }

  personalForm : any;

  constructor(private router : Router,private personalDetails : StoreDetailsService)
  {
    this.personalForm = personalDetails.candidateForm;
  }

  
  states: Array<any> = [];
  selectedCountry: String = "--Choose Country--";

  Countries: Array<any> = [
    { name: 'India', states:  [{name: 'Tamilnadu'} ,{name : 'Kerala' },{name:'Karnataka'},{name:'Andhra Pradesh'}]},
		{ name: 'Germany', states:  [{name :'Saxony'}, {name :'Berlin'}]},
		{ name: 'Spain', states:  [{name: 'Palencia'} , {name : 'Avila'}] },
		{ name: 'USA', states: [{name: 'Texas'},{name : 'California'}] },
		{ name: 'Mexico', states:  [{name: 'Colima'} ,{name : 'Tabasco'}]}
		
	];

  changeCountry(country: any) 
  { 
		this.states = this.Countries.find(con => con.name == country.target.value).states; 
	}

  gotoProfessionalDetails()
  {
    this.router.navigate(['/ProfessionalDetails'])
    console.log(this.personalForm.value);
  }

  goToNextPage()
  {
    this.router.navigate(['/ProfessionalDetails'])
    console.log(this.personalForm.value);
  }

}




/* import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import {Router} from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  onSubmit(myForm : NgForm){
    console.log(myForm);
  }
  
  states: Array<any> = [];
  selectedCountry: String = "--Choose Country--";

  Countries: Array<any> = [
		{ name: 'Germany', states:  ['Saxony', 'Berlin']},
		{ name: 'Spain', states:  [{name: 'Palencia'} , {name : 'Avila'}] },
		{ name: 'USA', states: [{name: 'Texas'},{name : 'California'}] },
		{ name: 'Mexico', states:  [{name: 'Colima'} ,{name : 'Tabasco'}]},
		{ name: 'India', states:  [{name: 'Tamilnadu'} ,{name : 'Bangalore' },{name:'Andhra Pradesh'},{name:'Kerla'},{name:'Delhi'}]}
	];

  changeCountry(country: any) 
  { 
		this.states = this.Countries.find(con => con.name == country.target.value).states; 
	}
 

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

 

  

}
 */