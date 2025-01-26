import { Task } from 'src/Task/Task.Entity';
export class User {
  id: string;
  name: string;
  email: string;
  tasks: Task[];
}
