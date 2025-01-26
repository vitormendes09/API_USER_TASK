import {Module} from '@nestjs/common';
import {TaskController} from './Task.Controller';
import {TaskService} from './Task.Service';
import { UserModule } from 'src/User/user.module';

@Module({
    controllers: [TaskController],
    providers: [TaskService],
    imports: [UserModule]
})

export class TaskModule{}
