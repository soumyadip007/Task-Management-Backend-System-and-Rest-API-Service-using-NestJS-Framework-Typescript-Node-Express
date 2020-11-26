import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { Task, TaskStatus } from './tasks.model';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService){

    }

    @Get()
    getAllTasks() : Task[]{
        return this.tasksService.getAllTasks()
    }

    @Get('/:id')
    getAllTaskByID(@Param('id') id:string) {
        return this.tasksService.getTaskByID(id)
    }

    
    @Delete('/:id')
    deleteTask(@Param('id') id:string) : void{
        this.tasksService.deleteTask(id)
    }

    @Post()
    createlTasks(@Body() createTaskDTO : CreateTaskDTO ) : Task{
        console.log('title',createTaskDTO.title);
        console.log('description',createTaskDTO.description);

        return this.tasksService.createTask(createTaskDTO);
    
    }

    @Patch("/:id/status")
    updateTaskStatus(
        @Param('id') id:string,
        @Body('status') status:TaskStatus,){

         return this.tasksService.updateTask(id,status);   
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