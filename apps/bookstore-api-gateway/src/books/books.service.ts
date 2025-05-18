import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

interface BookService {
  create(data: CreateBookDto): Observable<any>;
  findAll(data: {}): Observable<any>;
  findOne(data: { id: number }): Observable<any>;
  update(data: UpdateBookDto): Observable<any>;
  remove(data: { id: number }): Observable<any>;
}

@Injectable()
export class BooksService implements OnModuleInit {
  private bookService: BookService;

  constructor(@Inject('BOOK_CLIENT') private client: ClientGrpc) {}

  onModuleInit() {
    this.bookService = this.client.getService<BookService>('BookService');
  }

  create(createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  findAll() {
    return this.bookService.findAll({});
  }

  findOne(id: number) {
    return this.bookService.findOne({ id });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.bookService.update({ id, ...updateBookDto });
  }

  remove(id: number) {
    return this.bookService.remove({ id });
  }
}
