import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  resultDatasource = new MatTableDataSource<any>();
  displayColumns: string[] = ['userId', 'userName', 'isAdmin', 'createdDate', 'modifiedDate','action']; 

  constructor(private userService : UserService, private dialog:MatDialog){}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res) => {
      this.resultDatasource.data = res;
    })
  }

  addUser() {
    const modal = this.dialog.open(AddUserComponent, {
      width:'1000px',
    });
    modal.afterClosed().subscribe((data) => {
      this.userService.registerUser(data).subscribe(() => {
        this.getAllUsers();
        });
    });
  }

  editUser(element) {
    const modal = this.dialog.open(AddUserComponent, {
      data: element,
    });

    modal.afterClosed().subscribe((data) => {
      this.userService.editUser(data).subscribe(() => {
        this.getAllUsers();
       });

    })
  }

}
