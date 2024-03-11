import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ToDo } from "./toDo.entity";


@Injectable()
export class ToDosService {
  constructor(
    @InjectRepository(ToDo)
    private toDoRepository: Repository<ToDo>
  ) {}

  async findAll(): Promise<ToDo[]> {
    return await this.toDoRepository.find();
  }

  async findOne(id: number): Promise<ToDo> {
    return await this.toDoRepository.findOneBy({ id: id });
  }

  async create(toDo: ToDo): Promise<ToDo> {
    const newToDo = this.toDoRepository.create(toDo);
    return await this.toDoRepository.save(newToDo);
  }

  async update(id: number, toDo: ToDo): Promise<ToDo> {
    await this.toDoRepository.update(id, toDo);
    return await this.toDoRepository.findOneBy({ id: id });
  }

  async delete(id: number): Promise<void> {
    await this.toDoRepository.delete(id);
  }
}
