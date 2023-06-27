import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AppModule } from '../app.module';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { AddCompanyComponent } from './add-company.component';
import { CompanyService } from '../services/company.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthenticationService } from '../services/authentication.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

describe('AddCompanyComponent', () => {
  let component: AddCompanyComponent;
  let fixture: ComponentFixture<AddCompanyComponent>;
  let companyData: any;
  let service : CompanyService;
  let mockMainDialogRef : jasmine.SpyObj<AddCompanyComponent>;

  beforeEach(async () => {
    companyData = 
    [
      {"branchName":"Goa"
      , "place":"MH"
      , "website": "www.goa.com"
      , "contact":"9994543211"
      , "email":"goa@pune.com"}
    ];

    await TestBed.configureTestingModule({
      imports: [AppModule], 
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
        {provide: AuthenticationService, useValue:[]},
    ],
      declarations: [  AddCompanyComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AddCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    component.addCompanyForm.controls['rName'].setValue('');
    component.addCompanyForm.controls['rPlace'].setValue('');
    component.addCompanyForm.controls['rWebsite'].setValue('');
    component.addCompanyForm.controls['rContact'].setValue('');
    component.addCompanyForm.controls['rEmail'].setValue('');
    expect(component.addCompanyForm.valid).toBeFalsy();
  });

  it('should render title in a h2 tag', () => { //6
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Add Company');
  });

  it('should close dialog when close button clicked', fakeAsync(() => {
    component.saveCompany();
    tick();
    expect(component.addCompanyForm.valid).toBeFalsy();
  }));  
});
