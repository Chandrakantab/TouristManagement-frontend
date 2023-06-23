import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { UpdateTariffComponent } from './update-tariff/update-tariff.component';
import { SearchComponent } from './search/search.component';
import { AddUserComponent } from './add-user/add-user.component';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: "", component:LoginComponent
  },
  {
    path:"addCompany", component:AddCompanyComponent, canActivate: [CanActivateRouteGuard]
  }, 
  {
    path:"login", component:LoginComponent, pathMatch:"full"
  },
  {
    path:"update", component:UpdateTariffComponent, canActivate: [CanActivateRouteGuard]
  },
  {
    path:"search", component:SearchComponent, canActivate: [CanActivateRouteGuard]
  },
  {
    path:"addUser", component:AddUserComponent, canActivate: [CanActivateRouteGuard]
  },
  {
    path:"company", component:CompanyDetailsComponent, canActivate:[CanActivateRouteGuard]
  },
  {
    path:"user", component:UserListComponent, canActivate:[CanActivateRouteGuard]
  },
  {
    path:'company/:id', component:UpdateTariffComponent, canActivate:[CanActivateRouteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
