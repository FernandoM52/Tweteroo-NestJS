import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Tweet, TweetWithAvatar } from './entities/tweets';
import { CreateUserDto } from './dtos/create-user.dtos';
import { User } from './entities/users'; //retirar dps
import { CreateTweetDto } from './dtos/create-tweet.dtos';

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

  @Post("tweets")
  createTweet(@Body() body: CreateTweetDto) {
    try {
      return this.appService.createTweet(body);
    } catch (err) {
      throw new HttpException("UNAUTHORIZED", HttpStatus.UNAUTHORIZED);
    }
  }

  @Get("tweets")
  getTweets(@Query("page") page: string): TweetWithAvatar[] {
    const parsedPage = parseInt(page);
    if (parsedPage < 1 || isNaN(parsedPage) && page !== undefined) throw new HttpException("Página inválida", HttpStatus.BAD_REQUEST);
    
    return this.appService.getTweets(parsedPage);
  }

  @Get("users")
  getUsers(): User[] {
    return this.appService.getUsers();
  }
}
