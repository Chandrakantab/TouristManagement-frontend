import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TouristManagement';
  userId = 0;
  isAdmin = 0;

  constructor(private authService: AuthenticationService, private router:Router){
   

   
  }
  ngOnInit() {
    this.userId = parseInt(this.authService.getUserId());
    this.isAdmin = parseInt(this.authService.getIsAdmin());
    if(!isNaN(this.userId) && this.userId > 0) {
    } else {
      this.router.navigate(['/login']);
    }
  }
}
