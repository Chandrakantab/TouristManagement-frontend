import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from '../services/router.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  isAdminUser = 0;
  
  constructor(private router:Router,private routerService:RouterService,  private authService : AuthenticationService,){}
  
  ngOnInit(): void {
    this.isAdminUser = parseInt(this.authService.getIsAdmin());
    console.log(this.isAdminUser , "admin user he?")
  }

  addCompany() {
    this.router.navigate(['/addCompany']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  companyDetail() {
    this.router.navigate(['/company']);
  }

  updateTariff() {
    this.router.navigate(['/update']);
  }

  search() {
    this.router.navigate(['/search']);
  }

  addUser() {
    this.router.navigate(['/addUser']);
  }

  userList() {
    this.router.navigate(['/user']);
  }

  logout() {
    this.routerService.logout();
  }
}

  

  



