import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list'; 
import { MatIconModule } from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCompanyComponent } from './add-company/add-company.component';
import {MatButtonModule} from '@angular/material/button'
import {MatSelectModule} from '@angular/material/select'
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatTabsModule} from '@angular/material/tabs'
import {MatTableModule} from '@angular/material/table'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatTooltipModule} from '@angular/material/tooltip';
import { UpdateTariffComponent } from './update-tariff/update-tariff.component';
import { AddUserComponent } from './add-user/add-user.component';
import { SearchComponent } from './search/search.component';
import { UpdateTariffDialogComponent } from './dialog/update-tariff-dialog/update-tariff-dialog.component';
import { AddUserDialogComponent } from './dialog/add-user-dialog/add-user-dialog.component'
import { MatDialogModule } from '@angular/material/dialog';
import { AuthenticationService } from './services/authentication.service';
import { RouterService } from './services/router.service';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddCompanyComponent,
    UpdateTariffComponent,
    AddUserComponent,
    SearchComponent,
    UpdateTariffDialogComponent,
    AddUserDialogComponent,
    CompanyDetailsComponent,
    UserListComponent
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatExpansionModule,
    MatTooltipModule,
    MatListModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule 
  ],
  providers: [AuthenticationService,RouterService, CanActivateRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
