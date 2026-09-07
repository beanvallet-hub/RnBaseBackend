import { Injectable } from '@nestjs/common';
import { getMessaging } from 'firebase-admin/messaging';

@Injectable()
export class PushNotifService {
  async sendPushNotification({
    token,
    title,
    body,
    data,
  }: {
    token: string;
    title: string;
    body: string;
    data: Record<string, string>;
  }) {
    const message = {
      token,
      data: {
        title,
        body,
        ...data,
      },
      android: {
        priority: 'high', // required to wake the app for background data messages
      },
      apns: {
        headers: {
          'apns-priority': '10',
          'apns-push-type': 'background', // if using content-available for silent wake
        },
        payload: {
          aps: {
            'content-available': 1,
          },
        },
      },
    };

    try {
      const messaging = getMessaging();

      await messaging.send(message as any);
    } catch (err: any) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (err.code === 'messaging/registration-token-not-registered') {
        // TODO:: prune this token from your DB

        console.log('Error registration-token-not-registered');
      }

      throw err;
    }
  }
}
