import { Component, Inject, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  addCompanyForm: UntypedFormGroup;
  emailPattern = /^(https?:\/\/)?(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]?)(?:\.[a-z0-9][a-z0-9-]{0,61}[a-z0-9]?)*(?:\.[a-z0-9][a-z0-9-]{0,61}[a-z0-9])$/i;
  today = new Date();
  changedDate = '';
  pipe = new DatePipe('en-US');
  companyData : Company = new Company();
  company;
  
  constructor(
    private dialogRef: MatDialogRef<AddCompanyComponent>, 
    private companyService: CompanyService, 
    private router:Router,
    private authService : AuthenticationService,
    @Inject(MAT_DIALOG_DATA) public data : any) {}


  ngOnInit(): void {

  this.company = this.data;

  console.log("data", this.company);

  if(this.data) {
    this.addCompanyForm = new UntypedFormGroup({
      rName : new UntypedFormControl(this.company.branchName),
      rPlace: new UntypedFormControl(this.company.place),
      rWebsite: new UntypedFormControl(this.company.website),
      rContact: new UntypedFormControl(this.company.contact),
      rEmail : new UntypedFormControl(this.company.email)
    })
  } else {
    this.addCompanyForm = new UntypedFormGroup({
      rName : new UntypedFormControl('', Validators.required),
      rPlace: new UntypedFormControl('', Validators.required),
      rWebsite: new UntypedFormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      rContact: new UntypedFormControl('', Validators.required),
      rEmail : new UntypedFormControl('', [Validators.required, Validators.email])
    })
  }
    
  }

  get m(){
    return this.addCompanyForm.controls;
  }

  saveCompany() {
    if(this.addCompanyForm.valid) {
      this.dialogRef.close ({
      ...this.data,
      branchName: this.addCompanyForm.get('rName').value,
      place: this.addCompanyForm.get('rPlace').value,
      website: this.addCompanyForm.get('rWebsite').value,
      contact:this.addCompanyForm.get('rContact').value,
      email: this.addCompanyForm.get('rEmail').value,
      userId: this.authService.getUserId()
      });      
    }
  }
}
