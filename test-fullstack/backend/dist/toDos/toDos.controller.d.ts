import { ToDosService } from "./toDos.service";
import { ToDo } from "./toDo.entity";
export declare class ToDosController {
    private readonly toDoService;
    constructor(toDoService: ToDosService);
    findAll(): Promise<ToDo[]>;
    findOne(id: number): Promise<ToDo>;
    create(toDo: ToDo): Promise<ToDo>;
    update(id: number, toDo: ToDo): Promise<ToDo>;
    delete(id: number): Promise<void>;
}
