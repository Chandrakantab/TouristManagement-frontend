import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';
import { RouterService } from './services/router.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanActivateRouteGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService,
    private routerService: RouterService) {}


    canActivate(): Observable<boolean> {
      return this.authenticationService.isUserAuthenticated(this.authenticationService.getBearerToken()).pipe(map(authState => {
        console.log("authState", authState)
        if (!authState["isAuthenticated"]) this.routerService.routeToLogin();
         return !!authState;
      })
    )}
}