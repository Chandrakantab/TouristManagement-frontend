import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
placesArray;
searchForm: UntypedFormGroup;
resultDatasource = new MatTableDataSource<any>();
displayColumns: string[] = ['branch', 'website', 'contact','email','place', 'tariff']; 
errorMsg = "";
constructor(private searchService : SearchService) {}

  ngOnInit() {
    this.searchService.getPlaceLookUp().subscribe((res) => {
      this.placesArray = res;
    });

    this.searchForm = new UntypedFormGroup({
      rBranchId: new UntypedFormControl('', Validators.pattern("^[0-9]*$")),
      rBranchName: new UntypedFormControl(''),
      rPlace: new UntypedFormControl('')
    })
  }

  search() {
    if(this.searchForm.valid) {      
      if(this.searchForm.get('rBranchId').value.trim() || this.searchForm.get('rBranchName').value.trim() || this.searchForm.get('rPlace').value) {
        this.errorMsg = "";
        let obj = {
          branchId: this.searchForm.get('rBranchId').value.trim(),
          branchName: this.searchForm.get('rBranchName').value.trim(),
          placeId : this.searchForm.get('rPlace').value
        }

        this.searchService.search(obj).subscribe( res => {
          this.resultDatasource.data = res;
        }) 
      } else {
        this.errorMsg = "Please provide search criteria !";
      } 
    } else {
        this.errorMsg = "Please provide proper data !";
    }
    
  }

}
