import { Injectable } from '@nestjs/common';
import { User } from './entities/users';
import { Tweet } from './entities/tweets';
import { CreateUserDto } from './dtos/create-user.dtos';

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

  signUp(body: CreateUserDto) {
    const { username, avatar } = body;
    this.users.push(new User(username, avatar));
  }

  getTweets(): Tweet[] {
    // const lastFifteenTweets = this.tweets.slice(-15);
    // return lastFifteenTweets;
    return this.tweets;
  }

  getUsers(): User[] {
    return this.users;
  }
}
