import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';
import * as uuid from 'uuid';
import { TestingModuleBuilder } from '@nestjs/testing';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService){

    }

    @Get()
    getAllTasks() : Task[]{
        return this.tasksService.getAllTasks()
    }

    

    @Post()
    createlTasks(
        @Body('title') title:string,
        @Body('description') description:string,  ) : Task{

        console.log('title',title);
        console.log('description',description);

        return this.tasksService.createTask(title,description);
      //  return this.tasksService.getAllTasks()
    }

}
