import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';
import { CompanyService } from '../services/company.service';
import { MatTableDataSource } from '@angular/material/table';
import { AddCompanyComponent } from '../add-company/add-company.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Company } from '../models/company';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  
  resultDatasource = new MatTableDataSource<any>();
  displayColumns: string[] = ['branchId', 'branchName', 'place', 'website', 'contact','email', 'createdDate', 'action']; 
  isAdminUser = 0;
  userId = 0;

  constructor(private router:Router, 
    private companyService:CompanyService, 
    private authService : AuthenticationService,
    private dialog:MatDialog){}
  
  ngOnInit() {
    
    this.isAdminUser = parseInt(this.authService.getIsAdmin());
    this.userId = parseInt(this.authService.getUserId());

    console.log("Admin ", this.isAdminUser);
    console.log("userId ", this.userId);
    this.getAllCompanies();
  }

  getAllCompanies() {
    if(this.isAdminUser === 1) {
      console.log("inside admin");
      this.companyService.getAllCompanies(0).subscribe((res) => {
        this.resultDatasource.data = res;
      });
    } else {
      console.log("inside user", this.userId);
      this.companyService.getAllCompanies(this.userId).subscribe((res) => {
        this.resultDatasource.data = res;
      });
    }
  }

  addCompany() {
    const modal = this.dialog.open(AddCompanyComponent, {
      width:'1000px',
    });
    modal.afterClosed().subscribe((data) => {
      console.log('addCompany', data);

      this.companyService.addCompany(data).subscribe((r) => {
        this.getAllCompanies();
        });
    });
  }

  editCompany(element) {
    const modal = this.dialog.open(AddCompanyComponent, {
      data: element,
    });

    modal.afterClosed().subscribe((data) => {
      console.log('editCompany', data);
      this.companyService.editCompany(data).subscribe((r) => {

        this.getAllCompanies();
       });

    })
  }

  viewPlaces(element) {
    console.log("element", element);
    this.router.navigate(['/company',element.branchId])
  }
  
}
