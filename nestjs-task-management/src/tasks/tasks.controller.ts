import { Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller()
export class TasksController {

    constructor(private tasksService: TasksService){

    }

}
