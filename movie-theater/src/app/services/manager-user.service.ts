import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerUserService {

  private readonly API_MEMBER = 'http://localhost:8080/api';
  constructor(private httpClient: HttpClient) {
  }
  // Hiển thị danh sách thành viên-PhapNT
  getAllMember(): Observable<Account[]>{
    return this.httpClient.get<Account[]>(this.API_MEMBER + '/list-member');
  }
  // Thêm mới thành viên_PhapNT
  createNewMember(account: Account): Observable<void>{
    return this.httpClient.post<void>(this.API_MEMBER + '/create-member', account );
  }
// Hiển thị chi tiết thành viên- PhapNT
  findByIdMember(id: number): Observable<Account>{
    return this.httpClient.get<Account>(this.API_MEMBER + '/findById-member/' + id);
  }
  // Chỉnh sửa thành viên-PhapNT
  updateMember(account: Account): Observable<void>{
    return this.httpClient.put<void>(this.API_MEMBER + '/update-member/' + account.id, account);
  }
  // Xóa thành viên- PhapNT
  deleteMember(id: number){
    return this.httpClient.delete(this.API_MEMBER + '/delete-member/' + id);
  }
  // Tìm kiếm thành viên-PhapNT
  searchByNameMember(nameSearch: string): Observable<Account[]>{
    return this.httpClient.get<Account[]>(this.API_MEMBER + '/searchNameMember?name=' + nameSearch);
  }
}
