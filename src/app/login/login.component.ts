import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:UntypedFormGroup;
  isAdminUser= false;
  isLoggedInUser= false;
  failedLoginMsg='';
  user: User;
  submitMessage: String;
  rUserName;
  rPassword;

   constructor(private authenticationService: AuthenticationService,
    private routerService:RouterService) {}

    ngOnInit() {
      this.loginForm = new UntypedFormGroup({
        rUserName: new UntypedFormControl('', Validators.required),
        rPassword: new UntypedFormControl('', Validators.required)
      })    
    }

  login () {
    if(this.loginForm.valid) {
      let userName = this.loginForm.get('rUserName').value;
      let password = this.loginForm.get('rPassword').value;

      const loginData = new User(userName, password);
    
      this.authenticationService.authenticateUser(loginData).subscribe(
        response => {
          // Set the token in sessionStorage
          console.log("token ", response['token']);
          this.authenticationService.setBearerToken(response['token']);
          
          this.authenticationService.setUserId(response['userId']);
          this.authenticationService.setIsAdmin(response['isAdmin']);
          this.routerService.routeToLanding();
          // if(parseInt(this.authenticationService.getIsAdmin()) === 1) {
          //   this.routerService.routeToAdminSearch();
          // } else {
          //   this.routerService.navigateToCompanyDetails();
          // }
          
        },
        err => {
          // get the error message based on the status
          this.submitMessage = 'Login failed.';
        }
      );
    
  }
  }

 
  
}
