import { Component, OnInit } from '@angular/core';
import {ManagerUserService} from '../../../services/manager-user.service';
import {Account} from '../../../shared/model/entity/Account';
import {DeleteUserComponent} from '../delete-user/delete-user.component';
import {MatDialog} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  members: Account[];
  nameMember: string;
  page = 1;
  totalPage: number;
  constructor(private managerUserService : ManagerUserService,private dialog: MatDialog,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.managerUserService.getAllMember().subscribe((data)=>{
      // @ts-ignore
      this.members = data;
    })
  }

  openDialogDelete(equipmentId): void {
    this.managerUserService.findByIdMember(equipmentId).subscribe(data => {
      console.log(data);
      const dialogReg = this.dialog.open(DeleteUserComponent, {
        width : '500px',
        data : {data1: data},
        disableClose : true
      });
      dialogReg.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }

  searchName(): void {
    this.managerUserService.searchByNameMember(this.nameMember).subscribe(data => {
      if(data.length==0){
        this.toastrService.info('Vui lòng nhập tên phù hợp với danh sách!', 'Thông báo');
      }
      // @ts-ignore
      this.members = data;
      this.page = 1;

    });
  }
  paginate(page: number) {
    if (page >= 0 && page < this.totalPage) {
      this.page = page;
      this.ngOnInit();
    }
  }

}
