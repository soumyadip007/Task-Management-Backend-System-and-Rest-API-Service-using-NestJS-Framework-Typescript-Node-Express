import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { Task } from './tasks.model';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService){

    }

    @Get()
    getAllTasks() : Task[]{
        return this.tasksService.getAllTasks()
    }

    
    @Post()
    createlTasks(@Body() createTaskDTO : CreateTaskDTO ) : Task{
        console.log('title',createTaskDTO.title);
        console.log('description',createTaskDTO.description);

        return this.tasksService.createTask(createTaskDTO);
    
    }

}


/*

    @Post()
    createlTasks(
        @Body('title') title:string,
        @Body('description') description:string,  ) : Task{

        console.log('title',title);
        console.log('description',description);

        return this.tasksService.createTask(title,description);
      //  return this.tasksService.getAllTasks()
    }
*/