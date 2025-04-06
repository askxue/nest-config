import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AmConfigModule } from './config/am-config.module';

@Module({
  imports: [AmConfigModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
