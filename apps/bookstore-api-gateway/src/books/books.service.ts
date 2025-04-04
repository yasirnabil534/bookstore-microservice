import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(@Inject('BOOK_CLIENT') private bookClient: ClientProxy) {}
  create(createBookDto: CreateBookDto) {
    return this.bookClient.send('book.create', createBookDto);
  }

  findAll() {
    return this.bookClient.send('book.findAll', {});
  }

  findOne(id: number) {
    return this.bookClient.send('book.findOne', id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.bookClient.send('book.update', { id, ...updateBookDto });
  }

  remove(id: number) {
    return this.bookClient.send('book.remove', id);
  }
}
