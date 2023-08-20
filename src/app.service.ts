import { Injectable } from '@nestjs/common';
import { User } from './entities/users';
import { Tweet } from './entities/tweets';

@Injectable()
export class AppService {
  private users: User[];
  private tweets: Tweet[];

  constructor() {
    this.users = [];
    this.tweets = [];
  }

  getHello(): string {
    return 'Hello World!';
  }

  getTweets(): Tweet[] {
    return this.tweets;
  }
}
