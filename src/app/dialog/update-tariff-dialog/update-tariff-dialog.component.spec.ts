import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTariffDialogComponent } from './update-tariff-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AppModule } from 'src/app/app.module';

describe('UpdateTariffDialogComponent', () => {
  let component: UpdateTariffDialogComponent;
  let fixture: ComponentFixture<UpdateTariffDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule], 
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
        {provide: AuthenticationService, useValue:[]},
    ],
      declarations: [ UpdateTariffDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTariffDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
