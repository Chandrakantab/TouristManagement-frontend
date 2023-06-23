import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-tariff-dialog',
  templateUrl: './update-tariff-dialog.component.html',
  styleUrls: ['./update-tariff-dialog.component.scss']
})
export class UpdateTariffDialogComponent implements OnInit {
  updateTariffForm: UntypedFormGroup;
  placeInfo;

  constructor(private dialogRef: MatDialogRef<UpdateTariffDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    
    ) {

  }
  ngOnInit(): void {
    this.placeInfo = this.data;
    console.log("tariff", this.placeInfo)
    this.updateTariffForm = new UntypedFormGroup({
      rTariff: new UntypedFormControl(this.placeInfo.tariff, Validators.required)
    })
  }

  updateTariff() {
    if(this.updateTariffForm.valid) {
      this.dialogRef.close ({
      ...this.data,
      tariff: this.updateTariffForm.get('rTariff').value
      });
    }    
  }
}
