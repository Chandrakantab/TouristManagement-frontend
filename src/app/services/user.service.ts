import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Company } from '../models/company';
import { concatMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService) 
  { }

  company: Company [] |any;
  

  addCompany(companyData:Company){
    return this.http.addCompany(companyData);
  };

  editCompany(companyData:Company){
    return this.http.editCompany(companyData);
  };

  getAllCompanies(userId) {
    return this.http.getAllCompanies(userId);
  }

  getAllCompaniesForAdmin() {
    return this.http.getAllCompaniesForAdmin();
  }

  getCompanyPlaces(companyId) {
    return this.http.getCompanyPlaces(companyId);
  }

  updateTariff(tariffData) {
    return this.http.updateTariff(tariffData);
  }
 
  getAllUsers() {
    return this.http.getAllUsers();
  }

  registerUser (user) {
    return this.http.registerUser(user);
  }

  editUser(user) {
    return this.http.updateUser(user);
  }

}
