import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Tweet } from './entities/tweets';
import { CreateUserDto } from './dtos/create-user.dtos';
import { User } from './entities/users'; //retirar dps

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("sign-up")
  @HttpCode(200)
  signUp(@Body() body: CreateUserDto) {
    return this.appService.signUp(body);
  }

  @Get("tweets")
  getTweets(): Tweet[] {
    return this.appService.getTweets();
  }

  @Get("users")
  getUsers(): User[] {
    return this.appService.getUsers();
  }
}
