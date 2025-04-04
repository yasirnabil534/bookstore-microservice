import { Injectable } from '@nestjs/common';

import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: UserDto[] = [
    {
      id: 1,
      username: 'john',
      email: 'john@email.com',
      password: 'changeme',
      role: 'admin',
    },
    {
      id: 2,
      username: 'maria',
      email: 'maria@email.com',
      password: 'guess',
      role: 'user',
    },
  ];

  findAll() {
    return this.users;
  }
}
