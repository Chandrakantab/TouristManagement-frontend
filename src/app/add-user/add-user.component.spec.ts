import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AddUserComponent } from './add-user.component';
import { AppModule } from '../app.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from '../services/authentication.service';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule], 
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
        {provide: AuthenticationService, useValue:[]},
    ],
      declarations: [ AddUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    component.addForm.controls['rUserName'].setValue('');
    component.addForm.controls['rPassword'].setValue('');
    component.addForm.controls['rIsAdmin'].setValue('');
    expect(component.addForm.valid).toBeFalsy();
  });

  it('should render title in a h2 tag', () => { //6
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Add User');
  });

  it('should close dialog when close button clicked', fakeAsync(() => {
    component.saveUser;
    tick();
    expect(component.addForm.valid).toBeFalsy();
  }));  

});
