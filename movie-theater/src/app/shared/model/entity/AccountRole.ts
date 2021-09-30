import {Account} from './Account';
import {Role} from './Role';

export class AccountRole {
  account: Account;
  role: Role;

  constructor(account: Account, role: Role) {
    this.account = account;
    this.role = role;
  }
}
