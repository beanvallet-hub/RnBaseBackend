/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { cert, initializeApp } from 'firebase-admin/app';

const serviceAccount = require('../appc-7ce6a-firebase-adminsdk-fbsvc-11284811d0.json');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  initializeApp({
    credential: cert(serviceAccount),
  });

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}

bootstrap();
