import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterService } from '../services/router.service';
import { AuthenticationService } from '../services/authentication.service';
import { AppModule } from '../app.module';
import { async, of } from 'rxjs';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router : Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [
        {provide: AuthenticationService, useValue:{ getIsAdmin: () => of(0) }},
        {provide: RouterService, useValue:[]},
    ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it('should navigate', () => {
//     const component = fixture.componentInstance;
//     const navigateSpy = spyOn(router, 'navigate');

//     component.userList();
//     expect(navigateSpy).toHaveBeenCalledWith(['/user']);
// });
  // it('should call method', () => {
  //   spyOn(component, 'companyDetail');

  //   let button = fixture.debugElement.nativeElement.querySelector('userList');
  //   console.log("button", button);
  //   button.click();

  //   fixture.whenStable().then(() => {
  //     expect(component.companyDetail).toHaveBeenCalled();
  //   });
  // });

});
