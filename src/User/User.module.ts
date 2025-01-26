import{Module} from '@nestjs/common';
import {UserController} from './User.Controller';
import {UserService} from './User.Service';


@Module({
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule{}