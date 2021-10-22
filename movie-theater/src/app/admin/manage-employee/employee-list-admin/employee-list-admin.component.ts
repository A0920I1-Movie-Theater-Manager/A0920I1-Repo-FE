import { Component, OnInit } from '@angular/core';
import {EmployeeAccountService} from '../../../services/employee-account.service';
import {Account} from '../../../shared/model/entity/Account';
import {MatDialog} from '@angular/material/dialog';
import {EmployeeDeleteAdminComponent} from '../employee-delete-admin/employee-delete-admin.component';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-employee-list-admin',
  templateUrl: './employee-list-admin.component.html',
  styleUrls: ['./employee-list-admin.component.css']
})
export class EmployeeListAdminComponent implements OnInit {
    employeeList: Account[];
    page: 1;
    keyWord = null;
  constructor( private employeeAccountService: EmployeeAccountService ,
               private dialog: MatDialog,
               private toastService: ToastrService) { }


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
        this.ngOnInit();
      });
    });
  }

  searchKeyWord(){
    console.log(this.keyWord);
    this.employeeAccountService.searchEmployee(this.keyWord).subscribe((data) => {
      console.log(data);
      this.employeeList = data ;
      this.page = 1;
      if (this.employeeList.length === 0) {
        this.toastService.error('Không tìm thấy', 'Thông báo');
      }
    });

  }
}
