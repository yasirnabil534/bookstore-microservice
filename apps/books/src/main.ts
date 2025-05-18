import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { BooksAppModule } from './books-app.module';

async function bootstrap() {
  const app = await NestFactory.create(BooksAppModule);
  const configService = app.get(ConfigService);

  const microservice = await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'book',
      protoPath: join(__dirname, 'proto/book.proto'),
      url: `localhost:${configService.get('BOOK_SERVICE_PORT') || 3002}`,
    },
  });
  await microservice.listen();
}
bootstrap();
