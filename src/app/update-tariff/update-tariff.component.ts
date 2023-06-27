import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog'
import { UpdateTariffDialogComponent } from '../dialog/update-tariff-dialog/update-tariff-dialog.component';

import { concatMap } from 'rxjs';
import { CompanyService } from '../services/company.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-tariff',
  templateUrl: './update-tariff.component.html',
  styleUrls: ['./update-tariff.component.scss']
})
export class UpdateTariffComponent implements OnInit {

  resultDatasource = new MatTableDataSource<any>();
  placesArray = ['Andaman','Thailand','Dubai','Singapore','Malaysia'];
  searchTariffForm: UntypedFormGroup;
  branchName;
  branchId;

  displayColumns: string[] = ['place', 'tariff', 'action']; 

// resultArr = [
//   {place:"Andaman", tariff:"50000", branch:"Balewadi", branchId:"1"},
//   {place:"Andaman", tariff:"50000", branch:"Baner",branchId:"1"},
//   {place:"Dubai", tariff:"60000", branch:"Mumbai", branchId:"2"},
//   {place:"Singapore", tariff:"70000", branch:"Bhubaneswar", branchId:"3"},
//   {place:"Thailand", tariff:"90000", branch:"Balewadi", branchId:"3"},
//   {place:"Malaysia", tariff:"80000", branch:"Aundh", branchId:"3"},
  
// ]

constructor(private dialog: MatDialog, private route: ActivatedRoute, private companyService:CompanyService) {

}
  ngOnInit() {
    

    let id = this.route.snapshot.params['id'];
    
    this.getCompanyPlaces(id);

    // this.searchTariffForm = new UntypedFormGroup({
    //   rBranch: new UntypedFormControl(''),
    //   rPlace : new UntypedFormControl('')
    // })
  }

  getCompanyPlaces(id) {
    this.companyService.getCompanyPlaces(id).subscribe((res) => {
      this.setDatasource(res);
      this.branchName = res[0].branch_name;
      this.branchId = res[0].branch_id;
    });
  }
 

  setDatasource(res) {
    this.resultDatasource.data = res;
  }

  updateTariff(place) {
    const modal = this.dialog.open(UpdateTariffDialogComponent, {
      height: '400px',
      width: '600px',
      data: place,
      disableClose:true,
    });
    modal.afterClosed().subscribe((data) => {
      this.companyService.updateTariff(data).subscribe(() => {        
        this.getCompanyPlaces(this.branchId);
        });
    });
  }

}
