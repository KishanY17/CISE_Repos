import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Worksheet 3 Backend Work in Progress!';
  }
}
