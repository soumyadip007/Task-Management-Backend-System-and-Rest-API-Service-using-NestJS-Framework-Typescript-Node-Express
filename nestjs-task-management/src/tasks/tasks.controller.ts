import { Controller, Get } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';
import * as uuid from 'uuid/v1';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService){

    }

    @Get()
    getAllTasks() : Task[]{
        return this.tasksService.getAllTasks()
    }

    createTask(title:string, desceiprion:string){
        const task: Task={
            id: uui
            title,
            description,
            status: TaskStatus.OPEN;
          };


    }

}
