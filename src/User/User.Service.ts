import { Injectable } from '@nestjs/common';
import { User } from './User.Entity';
import { Task } from '../Task/Task.Entity';

@Injectable()
export class UserService {
  private users: User[] = [];

  createUser(user: User) {
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((user) => user.id === id);
  }

  addTaskToUser(userId: string, task: Task) {
    const user = this.findOne(userId);
    if (user) {
      user.tasks.push(task);
      return user;
    }
    return null;
  }

  remove(id: string) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
