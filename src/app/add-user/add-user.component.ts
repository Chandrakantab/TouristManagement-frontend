import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit{
  addForm: UntypedFormGroup;
  user;
  
  constructor(private dialogRef: MatDialogRef<AddUserComponent>, @Inject(MAT_DIALOG_DATA) public data : any) {}

  ngOnInit() {
    this.user = this.data;

    if(this.data) {
      this.addForm = new UntypedFormGroup({
        rUserName: new UntypedFormControl(this.user.userName, Validators.required),
        rPassword: new UntypedFormControl(this.user.password, Validators.required),
        rIsAdmin: new UntypedFormControl(this.user.isAdmin, Validators.required)
      })
    } else {
      this.addForm = new UntypedFormGroup({
        rUserName: new UntypedFormControl('', Validators.required),
        rPassword: new UntypedFormControl('', Validators.required),
        rIsAdmin: new UntypedFormControl('', Validators.required)
      })
    }
  }

  saveUser() {
    if(this.addForm.valid) {
      this.dialogRef.close ({
      ...this.data,
        userName: this.addForm.get('rUserName').value,
        password: this.addForm.get('rPassword').value,
        isAdmin: this.addForm.get('rIsAdmin').value
      });      
    }
  }
}
