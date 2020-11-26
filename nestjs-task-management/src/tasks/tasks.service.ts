import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks=[];

    numbergetAllTasks(){
        return this.tasks;
    }
}
