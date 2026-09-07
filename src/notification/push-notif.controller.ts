import { Controller, Get } from '@nestjs/common';
import { PushNotifService } from './push-notif.service';

@Controller('push-notif')
export class PushNotifController {
  constructor(private readonly pushNotifService: PushNotifService) {}

  @Get()
  findAll() {
    const deviceToken =
      'c_dg2HUGSkW5hvLgLErKn4:APA91bEDkjjze4v2eicz1oRaU6HC4AR3tlbfO8wrVZIzzDsgqljj8PvbJ14FZyBBp48ozn7OjbuTXQFL1woWOUe4EPUB81AdwSDAtHRiKT11plOAci-JVpU';

    const defaultNotif = {
      token: deviceToken,
      title: 'Nest Notification',
      body: 'You received a notification from backend',
      data: {},
    };

    return this.pushNotifService.sendPushNotification(defaultNotif);
  }
}
