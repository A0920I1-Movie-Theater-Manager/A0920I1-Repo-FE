import { Component, OnInit } from '@angular/core';
import {EmployeeAccountService} from '../../../services/employee-account.service';
import {Account} from '../../../shared/model/entity/Account';
import {MatDialog} from "@angular/material/dialog";
import {EmployeeDeleteAdminComponent} from "../employee-delete-admin/employee-delete-admin.component";

@Component({
  selector: 'app-employee-list-admin',
  templateUrl: './employee-list-admin.component.html',
  styleUrls: ['./employee-list-admin.component.css']
})
export class EmployeeListAdminComponent implements OnInit {
  employeeList: Account[];
  page: 1;

  constructor( private employeeAccountService: EmployeeAccountService ,
               private dialog: MatDialog ) { }


  ngOnInit(): void {
    this.employeeAccountService.getAllEmployee().subscribe((data) => {
     this.employeeList = data ;
     console.log(data);
    });
  }

  openDialogDelete(id) {
    this.employeeAccountService.getEmployeeById(id).subscribe(data => {
      // console.log(data);
      const dialogRef = this.dialog.open(EmployeeDeleteAdminComponent, {
        width: '700px',
        data: {data1: data}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }

}
