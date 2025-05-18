import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface UserService {
  findAll(data: {}): Observable<any>;
}

@Injectable()
export class UsersService implements OnModuleInit {
  private userService: UserService;

  constructor(@Inject('USER_CLIENT') private client: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.client.getService<UserService>('UserService');
  }

  findAll() {
    return this.userService.findAll({});
  }
}
