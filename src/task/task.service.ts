import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
  ) {}

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.tasksRepository.update({ id }, updateTaskDto);
  }

  findAll() {
    return this.tasksRepository.find();
  }

  findOne(id: number) {
    return this.tasksRepository.findOneBy({ id });
  }

  create(createTaskDto: CreateTaskDto) {
    const user = this.tasksRepository.create(createTaskDto);

    return this.tasksRepository.save(user);
  }

  remove(id: number) {
    return this.tasksRepository.delete(id);
  }
}
