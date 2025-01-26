import {RouterModule} from '@nestjs/core';
import {TaskController} from './Task.Controller';

export const TaskRoutes = RouterModule.register([
    { path: 'tasks', module: TaskController },

]);