export class User {
  private _username: string;
  private _avatar: string; // url

  constructor(username: string, avatar: string) {
    this._username = username;
    this._avatar = avatar;
  }

  get username(): string {
    return this._username;
  }

  get avatar(): string {
    return this._avatar;
  }
}