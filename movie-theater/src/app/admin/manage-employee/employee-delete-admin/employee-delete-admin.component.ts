import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {EmployeeAccountService} from "../../../services/employee-account.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-employee-delete-admin',
  templateUrl: './employee-delete-admin.component.html',
  styleUrls: ['./employee-delete-admin.component.css']
})
export class EmployeeDeleteAdminComponent implements OnInit {


  accountCode: any;
  idEmployeeAccount: any;

  constructor( public dialogRef: MatDialogRef<EmployeeDeleteAdminComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any,
               private employeeAccountService: EmployeeAccountService ,
               private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.accountCode = this.data.data1.accountCode;
    this.idEmployeeAccount = this.data.data1.id;
  }

  delete(){
    this.employeeAccountService.deleteEmployee(this.idEmployeeAccount).subscribe( data => {
      this.dialogRef.close();
      this.snackBar.open('Đã xóa thành công!', 'Oke',{duration: 2000});
    });
  }
}
