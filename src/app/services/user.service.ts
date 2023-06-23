import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Company } from '../models/company';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService) 
  { }

  company: Company [] |any;
  

  addCompany(companyData:Company){
    console.log("companyData", companyData);
    return this.http.addCompany(companyData);
  };

  editCompany(companyData:Company){
    console.log("companyData", companyData);
    return this.http.editCompany(companyData);
  };

  getAllCompanies(userId) {
    console.log("inside service" , userId);
    return this.http.getAllCompanies(userId);
  }

  getAllCompaniesForAdmin() {
    return this.http.getAllCompaniesForAdmin();
  }

  getCompanyPlaces(companyId) {
    return this.http.getCompanyPlaces(companyId);
  }

  updateTariff(tariffData) {
    console.log("tariif data ", tariffData )
    return this.http.updateTariff(tariffData);
  }
 
  getAllUsers() {
    return this.http.getAllUsers();
  }

}
