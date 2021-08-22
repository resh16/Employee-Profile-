import { Component, OnInit } from '@angular/core';
import { StoreDetailsService } from '../store-details.service';

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.css']
})
export class AttachmentsComponent implements OnInit {

  uploadDetails;
  certificateDetails;
  constructor(public details : StoreDetailsService, public details2 : StoreDetailsService) 
  { 
    this.uploadDetails = details.attachmentDetail;
    this.certificateDetails = details2.attachmentDetail;
  }

  ngOnInit(): void {
  }

  submitForm()
  {
    alert("Details submitted successfully");
    console.log('submit form',this.uploadDetails.value);
    console.log('submit form' , this.certificateDetails.value);
  }

}