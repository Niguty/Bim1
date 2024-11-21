import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      UserId: 1,
      username: 'jonh',
      password: 'changeme',
      email: 'jonh@example.com',
      roles: []
    },
    {
      UserId: 2,
      username: 'maria',
      password: 'guess',
      email: 'maria@example.com',
      roles: []
    },
  ];

  create(createUserDto: CreateUserDto): string {
    const newUser: User = {
      UserId: this.users.length + 1,
      username: createUserDto.username,
      password: createUserDto.password,
      email: createUserDto.email,
      roles: createUserDto.roles
    };

    this.users.push(newUser);
    return `Usuário ${newUser.username} criado com sucesso!`;
  }

  findAll(): User[] {
    return this.users;
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  update(id: number, updateUserDto: UpdateUserDto): string {
    const userIndex = this.users.findIndex((user) => user.UserId === id);

    if (userIndex === -1) {
      return `Usuário com ID ${id} não encontrado.`;
    }

    this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
    return `Usuário com ID ${id} atualizado com sucesso!`;
  }

  remove(id: number): string {
    const userIndex = this.users.findIndex((user) => user.UserId === id);

    if (userIndex === -1) {
      return `Usuário com ID ${id} não encontrado.`;
    }

    this.users.splice(userIndex, 1);
    return `Usuário com ID ${id} removido com sucesso!`;
  }
}
