import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTariffDialogComponent } from './update-tariff-dialog.component';

describe('UpdateTariffDialogComponent', () => {
  let component: UpdateTariffDialogComponent;
  let fixture: ComponentFixture<UpdateTariffDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTariffDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTariffDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
