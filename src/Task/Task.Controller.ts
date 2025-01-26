import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { TaskService } from './Task.Service';
import { CreateTaskDto } from './Task.Dto';
import { Task } from './Task.Entity';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    const task: Task = {
      id: Date.now().toString(),
      user: { id: createTaskDto.userId, name: '', email: '', tasks: [] },
      ...createTaskDto,
    };
    return this.taskService.create(task);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}
