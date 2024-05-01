import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getGreeting(): string {
    return 'Good Afternoon!';
  }
}
