import { Module } from '@nestjs/common';
import { PushNotifService } from './push-notif.service';
import { PushNotifController } from './push-notif.controller';

@Module({
  controllers: [PushNotifController],
  providers: [PushNotifService],
})
export class PushNorifModule {}
