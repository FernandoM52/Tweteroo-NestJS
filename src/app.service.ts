import { Injectable } from '@nestjs/common';
import { User } from './entities/users';
import { Tweet, TweetWithAvatar } from './entities/tweets';
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

  getTweets(page?: number): TweetWithAvatar[] {
    const LIMIT = 15;
    let lastFifteenTweets = this.tweets.slice(-15);

    if (page) {
      const startIndex = (page - 1) * LIMIT;
      lastFifteenTweets = this.tweets.slice(startIndex, startIndex + LIMIT);
    }

    const TweetsList = lastFifteenTweets.map((tweet) => {
      const tweetUser = this.users.find(user => user.username === tweet.username);
      const avatar = tweetUser ? tweetUser.avatar : null;
      return { username: tweet.username, avatar, tweet: tweet.tweet };
    });

    return TweetsList;
  }

  getUsers(): User[] {
    return this.users;
  }
}
