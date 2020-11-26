import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import {v4 as uuid} from 'uuid'
import { CreateTaskDTO } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks : Task[]=[];

    getAllTasks() : Task[]{
        return this.tasks;
    }

   // createTask(title:string, description:string) : Task{
       
    createTask(createTaskDTO : CreateTaskDTO) : Task{
       
        const { title, description}=createTaskDTO
       
        const task: Task={
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN
          };
        this.tasks.push(task);
        return task;      
    }
}
