import {Account} from './Account';
import {Role} from './Role';

export class AccountRole {
  id: number;
  account: Account;
  role: Role;

  constructor(id: number, account: Account, role: Role) {
    this.id = id;
    this.account = account;
    this.role = role;
  }
}
