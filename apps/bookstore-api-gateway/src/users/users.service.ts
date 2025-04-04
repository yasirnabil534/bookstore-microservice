import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_CLIENT') private usersClient: ClientProxy) {}

  findAll() {
    return this.usersClient.send('users.findAll', {});
  }
}
