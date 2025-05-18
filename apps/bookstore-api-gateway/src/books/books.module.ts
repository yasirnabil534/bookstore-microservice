import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'BOOK_CLIENT',
        useFactory: (configService: ConfigService) => ({
          transport: Transport.GRPC,
          options: {
            package: 'book',
            protoPath: join(process.cwd(), 'apps/books/src/proto/book.proto'),
            url: `localhost:${configService.get('BOOK_SERVICE_PORT') || 3002}`,
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
