import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailsComponent } from './company-details.component';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppModule } from '../app.module';
import { of } from 'rxjs';
import { HttpService } from '../services/http.service';
import { CompanyService } from '../services/company.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { Company } from '../models/company';

describe('CompanyDetailsComponent', () => {
  let component: CompanyDetailsComponent;
  let fixture: ComponentFixture<CompanyDetailsComponent>;
  let mockCompanyService: jasmine.SpyObj<CompanyService>;
  let httpTestingController: HttpTestingController;
  let company : Company;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [       
        {provide: HttpService, useValue: []},
        {provide: AuthenticationService, useValue:{ getIsAdmin: () => of(0), getUserId: () =>of(1) }},
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
        {provide: CompanyService, useValue:{ getAllCompanies : () => of([]), mockCompanyService }}
    ],
      declarations: [ CompanyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
