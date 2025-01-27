import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserService } from './User.Service';
import { User } from './User.Entity';
import { CreateUserDto } from './User.Dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const user: User = {
      id: Date.now().toString(),
      tasks: [],
      ...createUserDto,
    };
    return this.userService.createUser(user);
  }

  @Get()
    findAll() {
        return this.userService.findAll();
    }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
