import { Injectable } from '@nestjs/common';
import { User } from './entities/users';
import { Tweet } from './entities/tweets';
import { CreateUserDto } from './dtos/create-user.dtos';
import { CreateTweetDto } from './dtos/create-tweet.dtos';

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

  //TODO: achar uma forma melhor de garantir que avatar é um URL válida
  signUp(body: CreateUserDto) {
    const { username, avatar } = body;
    this.users.push(new User(username, avatar));
  }

  createTweet(body: CreateTweetDto) {
    const { username, tweet } = body;
    const isUserRegistered = this.users.find(user => user.username === username);

    if (isUserRegistered) {
      this.tweets.push(new Tweet(isUserRegistered, tweet));
      console.log(this.tweets)
    } else {
      throw new Error("UNAUTHORIZED")
    }
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
