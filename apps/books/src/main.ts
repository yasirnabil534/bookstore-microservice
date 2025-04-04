import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { BooksAppModule } from './books-app.module';

async function bootstrap() {
  const app = await NestFactory.create(BooksAppModule);
  const configService = app.get(ConfigService);

  const microservice = await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      port: configService.get('BOOK_SERVICE_PORT') || 3002,
    },
  });
  await microservice.listen();
}
bootstrap();
