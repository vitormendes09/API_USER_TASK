import {User} from "src/User/User.Entity";

export class Task {
    id: string;
    title: string;
    description: string;
    user: User;
}