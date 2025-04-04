import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @MessagePattern('book.create')
  create(@Payload() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @MessagePattern('book.findAll')
  findAll() {
    return this.booksService.findAll();
  }

  @MessagePattern('book.findOne')
  findOne(@Payload() id: number) {
    return this.booksService.findOne(id);
  }

  @MessagePattern('book.update')
  update(@Payload() updateBookDto: UpdateBookDto) {
    return this.booksService.update(updateBookDto.id, updateBookDto);
  }

  @MessagePattern('book.remove')
  remove(@Payload() id: number) {
    return this.booksService.remove(id);
  }
}
