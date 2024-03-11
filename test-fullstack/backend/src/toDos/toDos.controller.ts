import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ToDosService } from "./toDos.service";
import { ToDo } from "./toDo.entity";

@Controller('toDos')
export class ToDosController {
  constructor(private readonly toDoService: ToDosService) {}

  @Get()
  async findAll(): Promise<ToDo[]> {
    return await this.toDoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ToDo> {
    const toDos = await this.toDoService.findAll();
    const toDo = toDos.find(toDo => toDo.id === id);
    if (!toDo) {
      throw new Error('ToDo not found');
    } else {
      return toDo;
    }
  }

  @Post()
  async create(@Body() toDo: ToDo): Promise<ToDo> {
    return await this.toDoService.create(toDo);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() toDo: ToDo): Promise<ToDo> {
    return this.toDoService.update(id, toDo);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    const toDo = await this.toDoService.findOne(id);
    if (!toDo) {
      throw new Error('ToDo not found');
    }
    return this.toDoService.delete(id);
  }

}
