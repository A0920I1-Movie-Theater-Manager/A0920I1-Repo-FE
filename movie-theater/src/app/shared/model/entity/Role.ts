import {AccountRole} from './AccountRole';
import {JsonProperty} from 'jsog-typescript';
import {MovieShowtime} from './MovieShowtime';

export class Role {
  id: number;
  name: string;
  accountRole: AccountRole[];

  constructor(id: number, name: string, accountRole: AccountRole[]) {
    this.id = id;
    this.name = name;
    this.accountRole = accountRole;
  }
}
