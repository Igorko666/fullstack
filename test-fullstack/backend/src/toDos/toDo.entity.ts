import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ToDo{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  status: string;
}