import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  // login() {
  //   if(this.loginForm.valid) {
  //     let userName = this.loginForm.get('rUserName').value;
  //     let formPass = this.loginForm.get('rPassword').value;

  //     this.authenticationService.getUserById(userName).subscribe((res) =>{
  //       if(Object.keys(res).length) {
  //         this.validateUser(res, formPass)
  //       } else {
  //         console.log("No User Found");
  //       }
  //     })
  //   }
  // }


  login () {
    if(this.loginForm.valid) {
      let userName = this.loginForm.get('rUserName').value;
      let password = this.loginForm.get('rPassword').value;

      const loginData = new User(userName, password);
    
      this.authenticationService.authenticateUser(loginData).subscribe(
        response => {
          console.log("REsponse", response);
          // Set the token in sessionStorage
          this.authenticationService.setBearerToken(response['token']);
          
          this.authenticationService.setUserId(response['userId']);
          this.authenticationService.setIsAdmin(response['isAdmin']);
          console.log("getIsAdmin", this.authenticationService.getIsAdmin());
          console.log("getUserId", this.authenticationService.getUserId());
          if(parseInt(this.authenticationService.getIsAdmin()) === 1) {
            this.routerService.routeToUserDetails();
          } else {
            this.routerService.navigateToCompanyDetails();
          }
          
        },
        err => {
          // get the error message based on the status
          this.submitMessage = 'Login failed.';
        }
      );
    
  }
  }

 
  
}
