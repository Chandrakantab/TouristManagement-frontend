import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  //private apiUserByID:string =`http://localhost:3000/Users`;
  private apiUserByID:string = `http://localhost:8084/api/v1/user/`
  private companyAPI: string = 'http://localhost:8084/api/v1/branch'
  private companyQueryAPI: string = 'http://localhost:8083/api/v1/branch'
  private userQueryApi : string = 'http://localhost:8083/api/v1/user'

  constructor(private http:HttpClient) { }

  getUserById(userID):Observable<User> {
    console.log("url", this.http.get<User>(`${this.apiUserByID}${userID}`));
    return this.http.get<User>(`${this.apiUserByID}${userID}`);
  }

  addCompany(companyData:Company) {
    console.log("companyDatatoadd", companyData);
    let apiURL = this.companyAPI +'/add-places';
    return this.http.post<Company>(apiURL, companyData);
  }

  editCompany(companyData:Company) {
    console.log("companyDatatoadd", companyData);
    let apiURL = this.companyAPI +'/edit-places';
    return this.http.put<Company>(apiURL, companyData);
  }

  getAllCompanies(userId) : Observable<any> {
    let apiURL = this.companyQueryAPI + '/getAll/' + userId;
    return this.http.get<Array<Company>>(apiURL);
  }

  getAllCompaniesForAdmin() {
    let apiURL = this.companyQueryAPI + '/getAll/0';
    return this.http.get<Array<Company>>(this.companyQueryAPI);
  }

  getCompanyPlaces (companyId) {
    return this.http.get(this.companyQueryAPI+'/'+companyId);
  }

  updateTariff(tariffData) {
    let apiURL = this.companyQueryAPI + '/update-tariff';
    let status =  this.http.put(apiURL, tariffData);
    console.log("status", status);
    return status;
  }

  getAllUsers() : Observable<any> {
    return this.http.get<Array<User>>(this.userQueryApi);
  }
}
