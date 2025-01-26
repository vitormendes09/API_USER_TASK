import { Injectable } from "@nestjs/common";
import {Task } from "./Task.Entity";
import  {UserService} from "../User/User.Service";

@Injectable()
export class TaskService {
    private tasks: Task[] = [];

    constructor(private userService: UserService) {}

    create(task : Task){
        const user = this.userService.findOne(task.user.id);
        if(user){
            this.tasks.push(task);
            this.userService.addTaskToUser(user.id, task);
            return task;
        }
        throw new Error("User not found");
    }

    findAll(){
        return this.tasks;
    }   

    findOne(id: string){
        return this.tasks.find(task => task.id === id);
    }

    remove(id: string){
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
    
}