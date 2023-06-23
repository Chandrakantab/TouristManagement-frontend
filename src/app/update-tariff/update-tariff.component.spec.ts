import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTariffComponent } from './update-tariff.component';

describe('UpdateTariffComponent', () => {
  let component: UpdateTariffComponent;
  let fixture: ComponentFixture<UpdateTariffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTariffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
