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

    getTaskByID(id:string) : Task{
        return this.tasks.find(task => task.id===id);
    }
    
    deleteTask(id:string) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

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
