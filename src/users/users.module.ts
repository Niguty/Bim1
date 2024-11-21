import { Module } from '@nestjs/common';
import { UsersController } from './userController/users.controller';
import { UsersService } from './userService/users.service';


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
