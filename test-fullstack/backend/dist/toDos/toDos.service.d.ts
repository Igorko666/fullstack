import { Repository } from "typeorm";
import { ToDo } from "./toDo.entity";
export declare class ToDosService {
    private toDoRepository;
    constructor(toDoRepository: Repository<ToDo>);
    findAll(): Promise<ToDo[]>;
    findOne(id: number): Promise<ToDo>;
    create(toDo: ToDo): Promise<ToDo>;
    update(id: number, toDo: ToDo): Promise<ToDo>;
    delete(id: number): Promise<void>;
}
