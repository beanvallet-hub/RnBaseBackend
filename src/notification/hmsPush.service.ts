import axios from 'axios';

import { HmsAuthService } from './hmsAuth.service';

export type HmsPushMessage = {
  title: string;
  body: string;
  data?: Record<string, string>;
};

export class HmsPushClient {
  private readonly authService = new HmsAuthService();

  private readonly clientId = process.env.HMS_CLIENT_ID!;

  async sendToToken(token: string, message: HmsPushMessage) {
    const accessToken = await this.authService.getAccessToken();

    const data = JSON.stringify({
      ...message.data,
      title: message.title,
      body: message.body,
    });

    const payload = {
      validate_only: false,

      message: {
        data,

        token: [token],
      },
    };

    const response = await axios.post(
      `https://push-api.cloud.huawei.com/v1/${this.clientId}/messages:send`,

      payload,

      {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',

          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return response.data;
  }

  async sendNotification(
    token: string,
    options: {
      title: string;
      body: string;
      data?: Record<string, string>;
    },
  ) {
    return this.sendToToken(token, options);
  }
}
