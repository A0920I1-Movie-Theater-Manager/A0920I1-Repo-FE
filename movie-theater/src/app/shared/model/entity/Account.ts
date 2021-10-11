import {AccountRole} from './AccountRole';
import {Comment} from './Comment';
import {JsonProperty} from 'jsog-typescript';

export class Account {
  id: number;
  username: string;
  accountCode: string;
  password: string;
  fullname: string;
  birthday: string;
  idCard: string;
  address: string;
  phone: string;
  email: string;
  gender: string;
  totalPoint: number;
  imageUrl: string;
  accountRoles: AccountRole[];
  comments: Comment[];
  constructor(id: number, username: string, accountCode: string, password: string, fullname: string, birthday: string, idCard: string,
              address: string, phone: string, email: string, gender: string, totalPoint: number, imageUrl: string,
              accountRoles: AccountRole[], comments: Comment[]) {
    this.id = id;
    this.username = username;
    this.accountCode = accountCode;
    this.password = password;
    this.fullname = fullname;
    this.birthday = birthday;
    this.idCard = idCard;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.gender = gender;
    this.totalPoint = totalPoint;
    this.imageUrl = imageUrl;
    this.accountRoles = accountRoles;
    this.comments = comments;
  }
}
