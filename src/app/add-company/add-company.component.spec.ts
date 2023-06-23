import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from '../app.module';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { AddCompanyComponent } from './add-company.component';
import { CompanyService } from '../services/company.service';

fdescribe('AddCompanyComponent', () => {
  let component: AddCompanyComponent;
  let fixture: ComponentFixture<AddCompanyComponent>;
  let companyData: any;
  

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
      imports: [HttpClientTestingModule], 
    providers: [CompanyService],
      declarations: [ AddCompanyComponent ]
    })
    .compileComponents();



    fixture = TestBed.createComponent(AddCompanyComponent);
    component = fixture.componentInstance;

    

    fixture.detectChanges();
  });  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
});
