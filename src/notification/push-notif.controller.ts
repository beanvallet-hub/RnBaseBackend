import { Controller, Get } from '@nestjs/common';
import { PushNotifService } from './push-notif.service';

@Controller('push-notif')
export class PushNotifController {
  constructor(private readonly pushNotifService: PushNotifService) {}

  @Get()
  findAll() {
    const deviceToken =
      'f4gE18rIRWKVmUz-Ray4q9:APA91bF3A7Sz4S953PlHy3sZzg8EHkwjlMbl66ZoEtoBQebJBPX_zczfy8OfAm-A6VDvbZByTFQ1aB-WP38_qrvQP_OTUoMcQChW4VnevstdgLcxMPcEJIM';

    const defaultNotif = {
      token: deviceToken,
      title: 'Nest Notification',
      body: 'You received a notification from backend',
      data: {},
    };

    return this.pushNotifService.sendPushNotification(defaultNotif);
  }
}
