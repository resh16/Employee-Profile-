import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttachmentsComponent } from './attachments/attachments.component';
import { FormsModule } from '@angular/forms';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';

const routes: Routes = [
  {path:'',component:PersonalDetailsComponent},
  {path:'PersonalDetails', component:PersonalDetailsComponent},
  {path:'ProfessionalDetails', component:ProfessionalDetailsComponent},
  {path:'Attachments', component:AttachmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ,
  FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
