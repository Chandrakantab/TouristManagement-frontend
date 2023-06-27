import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';


import { User } from '../models/user';

@Injectable()
export class AuthenticationService {

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  @Output() getLoggedIsAdmin: EventEmitter<any> = new EventEmitter();

  //private authUrl = 'http://localhost:3000/auth/v1/';
  private authUrl = 'http://localhost:8087/api/v1/auth/';
  private authUrl1 = 'http://localhost:8087/api/v1/auth/';
  private isAuthenticated = false;
  users : any;
  userList : String;
  usersSubject: BehaviorSubject<Array<User>>;
  usersById : any;
  usersSubjectById: BehaviorSubject<Array<User>>;
  loggedIn: boolean = false;

  constructor(private httpClient: HttpClient) { 
    this.users = [];
    this.usersSubject = new BehaviorSubject(this.users);
    this.usersById = [];
    this.usersSubjectById = new BehaviorSubject(this.usersById);
  }

  

  authenticateUser(data) : Observable<any> {
    //this.getLoggedInName.emit(0);
    return this.httpClient.post(this.authUrl + 'loginuser/', data);
  }
  

  saveUser(data) {
    return this.httpClient.post(this.authUrl + 'register/',data);
  }

  updateUser(data) {  
    return this.httpClient.post(this.authUrl + 'update/',data);
  }

  fetchUser(data) {
    return this.httpClient.get<Array<User>>(this.authUrl + 'getUser/'+ data)
    .subscribe(data => {
      this.users = data;
      this.usersSubject.next(this.users);
    });
  }

  getUser(data): BehaviorSubject<Array<User>> {  
    this.fetchUser(data);    
    return this.usersSubject;
  }

  fetchUserById(data) {
    return this.httpClient.get<Array<User>>(this.authUrl + 'getUser/'+ data)
    .subscribe(data => {
      this.usersById = data;
      this.usersSubjectById.next(this.usersById);
    });
  }

  getUserById(data): BehaviorSubject<Array<User>> {
    this.fetchUserById(data);
    return this.usersSubjectById;
  }
  

  isUserAuthenticated(token) {  
     return this.httpClient.post(this.authUrl1 + 'isAuthenticated', {}, {
      headers : new HttpHeaders().set('Authorization', `Bearer ${token}`)
    });
  }

  isLoggedIn() {
    return this.loggedIn;
  }

   setBearerToken(token) {
    sessionStorage.setItem('bearerToken', token);
  }

  getBearerToken() {
    return sessionStorage.getItem('bearerToken');
  }

  setUserName(userName) {
    sessionStorage.setItem('userName', userName);
  }

  setLoggedInUser(user) {
    sessionStorage.setItem('loggedInUser', user);
  }

  getLoggedInUser() {
    return sessionStorage.getItem('loggedInUser');
  }

  setUserId(userId) {
    this.getLoggedInName.emit(userId);
    sessionStorage.setItem('userId', userId);
  }

  setIsAdmin(isAdmin) {
    this.getLoggedIsAdmin.emit(isAdmin);
    sessionStorage.setItem('isAdmin', isAdmin);
  }
  
  getIsAdmin() {
    return sessionStorage.getItem('isAdmin');
  }

  getUserId() {
    return sessionStorage.getItem('userId');
  }

  

  removeAuthentication(){
    this.getLoggedInName.emit(0);
    this.getLoggedIsAdmin.emit(0);
    sessionStorage.clear();
  }
}
