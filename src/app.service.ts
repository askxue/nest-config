import { Inject, Injectable } from '@nestjs/common';
import appConfig from './config/app.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    @Inject(appConfig.KEY)
    private readonly loggerSettings: ConfigType<typeof appConfig>,
  ) {
    console.info(this.loggerSettings.level);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
