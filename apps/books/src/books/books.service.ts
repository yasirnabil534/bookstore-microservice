import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BooksService {
  private book: BookDto[] = [
    {
      id: 1,
      title: 'The Lord of the Rings',
      description: 'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      author: 'J. R. R. Tolkien',
      rating: 5, 
    },
    {
      id: 2,
      title: 'The Hobbit',
      description: 'The Hobbit is a children\'s fantasy novel by English author J. R. R. Tolkien.',
      author: 'J. R. R. Tolkien',
      rating: 4,
    }
  ];

  create(createBookDto: CreateBookDto) {
    const newBook: BookDto = {
      id: this.book.length + 1,
      ...createBookDto, 
    }

    this.book.push(newBook);
    return newBook;
  }

  findAll() {
    return this.book;
  }

  findOne(id: number) {
    return this.book.find(book => book.id === id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    const bookIndex = this.book.findIndex(book => book.id === id);
    if (bookIndex >= 0) {
      this.book[bookIndex] = {
        ...this.book[bookIndex],
        ...updateBookDto,
      };
      return this.book[bookIndex];
    }
    return null;
  }

  remove(id: number) {
    const bookIndex = this.book.findIndex(book => book.id === id);
    if (bookIndex >= 0) {
      this.book.splice(bookIndex, 1);
      return true;
    }
    return false;
  }
}
