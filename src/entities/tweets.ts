import { User } from "./users";

export class Tweet {
  private _user: User;
  private _tweet: string;

  constructor(user: User, tweet: string) {
    this._user = user;
    this._tweet = tweet;
  }

  get username(): string {
    return this._user.username;
  }

  get tweet(): string {
    return this._tweet;
  }
}

export class TweetWithAvatar {
  username: string;
  avatar: string;
  tweet: string;
}
