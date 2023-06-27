import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class RouterService {

  constructor(private router: Router, private location: Location, private authService: AuthenticationService) {}

  navigateToHome() {
    this.router.navigate(['/home']);
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

  routeToAdminSearch() {
    this.router.navigate(['/adminSearch']);
  }

  routeToLanding() {
    this.router.navigate(['/landing']);
  }
  
  routeToSignUp() {
    this.router.navigate(['register']);
  }  

  routeBack() {
    this.location.back();
  }  

  logout() {
    this.authService.removeAuthentication();
    //this.authService.setUserId(0);
    //this.authService.setIsAdmin(0);
    this.routeToLogin();
  }
}
