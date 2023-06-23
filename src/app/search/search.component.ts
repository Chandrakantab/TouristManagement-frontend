import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
placesArray = ['Andaman','Thailand','Dubai','Singapore','Malaysia']
searchForm: UntypedFormGroup;
resultDatasource = new MatTableDataSource<any>();
displayColumns: string[] = ['place', 'tariff', 'branch', 'website', 'contact','email']; 

resultArr = [
  {place:"Andaman", tariff:"50000", branch:"Balewadi", website:"www.balewadiTourism.com", contact:"1234567890", email:"balewadi@gmail.com"},
  {place:"Andaman", tariff:"50000", branch:"Baner", website:"www.baner.com", contact:"1234567890", email:"baner@gmail.com"},
  {place:"Dubai", tariff:"60000", branch:"Mumbai", website:"www.mumbai.com", contact:"7655280024", email:"a1@gmail.com"},
  {place:"Singapore", tariff:"70000", branch:"Bhubaneswar", website:"www.bhubaneswar.com", contact:"1234567890", email:"bbsr@gmail.com"},
  {place:"Thailand", tariff:"90000", branch:"Balewadi", website:"www.balewadiarea.com", contact:"1234567890", email:"gothere@gmail.com"},
  {place:"Malaysia", tariff:"80000", branch:"Aundh", website:"www.Aundh.com", contact:"2345678912", email:"Aundh@gmail.com"},
  
]

  ngOnInit(): void {
    this.searchForm = new UntypedFormGroup({
      rBranchId: new UntypedFormControl(''),
      rBranchName: new UntypedFormControl(''),
      rPlace: new UntypedFormControl('')
    })

    this.search();
    
  }

  search() {
    console.log("data", this.searchForm.get('rBranchId').value)
    this.resultDatasource.data = this.resultArr;
    
  }

}
