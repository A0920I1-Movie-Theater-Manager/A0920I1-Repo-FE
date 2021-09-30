import {Movie} from './Movie';
import {Account} from './Account';

export class Comment {
  id: number;
  content: string;
  movie: Movie;
  account: Account;

  constructor(id: number, content: string, movie: Movie, account: Account) {
    this.id = id;
    this.content = content;
    this.movie = movie;
    this.account = account;
  }
}
