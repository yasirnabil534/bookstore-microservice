import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @GrpcMethod('BookService', 'Create')
  create(createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @GrpcMethod('BookService', 'FindAll')
  findAll() {
    return { books: this.booksService.findAll() };
  }

  @GrpcMethod('BookService', 'FindOne')
  findOne(data: { id: number }) {
    return this.booksService.findOne(data.id);
  }

  @GrpcMethod('BookService', 'Update')
  update(updateBookDto: UpdateBookDto) {
    return this.booksService.update(updateBookDto.id, updateBookDto);
  }

  @GrpcMethod('BookService', 'Remove')
  remove(data: { id: number }) {
    return this.booksService.remove(data.id);
  }
}
