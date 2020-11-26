import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';
import * as uuid from 'uuid';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService){

    }

    @Get()
    getAllTasks() : Task[]{
        return this.tasksService.getAllTasks()
    }

    

    @Post()
    createlTasks(@Body() body){
        console.log(body);
      //  return this.tasksService.getAllTasks()
    }

}
