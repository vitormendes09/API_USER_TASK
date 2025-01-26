import {Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import {UserService} from './User.Service';
import {User} from './User.Entity';
import { CreateUserDto } from './User.Dto';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto){
        const user: User = {
            id: Date.now().toString(),tasks: [], ...createUserDto,};
        return this.userService.createUser( user);
    }

    @Get(':id')
    findAll(){
        return this.userService.findAll();
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.userService.remove(id);
    }

}