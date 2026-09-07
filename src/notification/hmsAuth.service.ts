import axios from 'axios';

type HuaweiTokenResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

export class HmsAuthService {
  private accessToken: string | null = null;
  private expiresAt = 0;

  private readonly clientId = process.env.HMS_CLIENT_ID!;

  private readonly clientSecret = process.env.HMS_CLIENT_SECRET!;

  async getAccessToken(): Promise<string> {
    const now = Date.now();

    // Keep a small safety margin before expiration.
    if (this.accessToken && now < this.expiresAt - 60_000) {
      return this.accessToken;
    }

    const response = await axios.post<HuaweiTokenResponse>(
      'https://oauth-login.cloud.huawei.com/oauth2/v3/token',

      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: this.clientId,
        client_secret: this.clientSecret,
      }),

      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    this.accessToken = response.data.access_token;

    this.expiresAt = now + response.data.expires_in * 1000;

    return this.accessToken;
  }
}
