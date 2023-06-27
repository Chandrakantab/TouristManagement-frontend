import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTariffComponent } from './update-tariff.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppModule } from '../app.module';
import { AuthenticationService } from '../services/authentication.service';

describe('UpdateTariffComponent', () => {
  let component: UpdateTariffComponent;
  let fixture: ComponentFixture<UpdateTariffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule], 
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
        {provide: AuthenticationService, useValue:[]},
    ],
      declarations: [ UpdateTariffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
