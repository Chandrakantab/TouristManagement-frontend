import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AppModule } from '../app.module';
import { AuthenticationService } from '../services/authentication.service';
import { UntypedFormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';

describe('LoginComponentComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthService : jasmine.SpyObj<AuthenticationService>;
  let userData;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule], 
      providers: [       
        {provide: AuthenticationService, useValue:[]},
    ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    userData = 
    {
      "isAdmin": "0",
      "message": "User Successfully Logged in!",
      "userId": "8",
      "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjEyIiwiaWF0IjoxNjg3NjE1MDUyLCJleHAiOjE2ODc2MTgwNTJ9.37M61BSBOx0PjRoMu7gi5hnm1e83Mxcd5bcEZ7VNiyw"
    };
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call get function and return true', () => {
    // Arrange
    //component.object = undefined;
    const loginData = new User('Chandra', 'Chandra');
    let result;
    // mockAuthService.authenticateUser(loginData).subscribe((res) => {
    //   result = res;
    // });
    //console.log("result", result);

    // Assert
    //expect(result).toBe(userData);
  });

  it('should call login one time', () => {
    spyOn(component, 'login').and.callThrough();
    component.login();
    component.loginForm.valid;
    expect(component.login).toHaveBeenCalledTimes(1);
  });


});
