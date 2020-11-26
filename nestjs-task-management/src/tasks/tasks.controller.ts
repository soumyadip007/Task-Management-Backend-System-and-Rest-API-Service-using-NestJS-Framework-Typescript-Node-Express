import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller()
export class TasksController {

    constructor(private tasksService: TasksService){

    }

    @Get()
    getAllTasks(){
        return this.tasksService.getAllTasks()
    }

}
