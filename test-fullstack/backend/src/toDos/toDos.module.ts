import { Module } from '@nestjs/common';
import { ToDosController } from './toDos.controller';
import { ToDosService } from './toDos.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ToDo } from "./toDo.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ToDo])],
  controllers: [ToDosController],
  providers: [ToDosService]
})
export class ToDosModule {}
