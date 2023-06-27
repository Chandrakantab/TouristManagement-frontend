import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterService } from '../services/router.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  loggedUserId: number;
  loggedIsAdmin: number;
  
  constructor(private router:Router,private routerService:RouterService,  private authService : AuthenticationService, private route : ActivatedRoute){
    this.authService.getLoggedInName.subscribe(userId => this.changeId(userId));
    this.authService.getLoggedIsAdmin.subscribe(isAdmin => this.changeIsAdmin(isAdmin));
  }
  
  ngOnInit() { 
    this.loggedUserId = parseInt(this.authService.getUserId());
    this.loggedIsAdmin = parseInt(this.authService.getIsAdmin());
  }
 
  private changeId(userId) {
        this.loggedUserId = parseInt(userId);
  }
  private changeIsAdmin(isAdmin) {
      this.loggedIsAdmin = parseInt(isAdmin);
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

  adminSearch() {
    this.router.navigate(['/adminSearch']);
  }

  addUser() {
    this.router.navigate(['/addUser']);
  }

  userList() {
    this.router.navigate(['/user']);
  }

  landing() {
    this.router.navigate(['/landing']);
  }

  logout() {
    this.routerService.logout();
  }
}

  

  



