import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Tweet } from './entities/tweets';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("tweets")
  getTweets(): Tweet[] {
    return this.appService.getTweets();
  }
}
