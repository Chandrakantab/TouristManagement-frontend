import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class RouterService {

  constructor(private router: Router, private location: Location, private authService: AuthenticationService) {}

  navigateToHome() {
    console.log("navigate here");
    this.router.navigate(['/search'])
  }

  routeToLogin() {
    this.router.navigate(['login']);
  }

  routeToUserDetails() {
    this.router.navigate(['/user']);
  }

  navigateToCompanyDetails() {
    this.router.navigate(['/company']);
  }
  
  routeToSignUp() {
    this.router.navigate(['register']);
  }  

  routeBack() {
    this.location.back();
  }  

  logout() {
    this.authService.removeAuthentication();
    this.routeToLogin();
  }
}
