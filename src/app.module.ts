import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PushNorifModule } from './notification/push-notif.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'database.sqlite',
      autoLoadEntities: true,
      synchronize: true, // set to false in production
    }),
    TaskModule,
    PushNorifModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
