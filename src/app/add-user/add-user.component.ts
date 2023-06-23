import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit{
  addForm: UntypedFormGroup;

  constructor(private dialogRef: MatDialogRef<AddUserComponent>, ) {}

  ngOnInit() {
    this.addForm = new UntypedFormGroup({
      rUserName: new UntypedFormControl('', Validators.required),
      rPassword: new UntypedFormControl('', Validators.required),
      rIsAdmin: new UntypedFormControl('', Validators.required)
    })
    
  }

  checkValues() {
    console.log("here");
    if(this.addForm.valid) {
      let title = this.addForm.get('rTitle').value;

      console.log("title", title)
    }
  }

  saveUser() {
    if(this.addForm.valid) {
      this.dialogRef.close ({      
      rUserName: this.addForm.get('rUserName').value,
      rPassword: this.addForm.get('rPassword').value,
      rIsAdmin: this.addForm.get('rIsAdmin').value
      });      
    }

  } 
}
