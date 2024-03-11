"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const toDo_entity_1 = require("./toDo.entity");
let ToDosService = class ToDosService {
    constructor(toDoRepository) {
        this.toDoRepository = toDoRepository;
    }
    async findAll() {
        return await this.toDoRepository.find();
    }
    async findOne(id) {
        return await this.toDoRepository.findOneBy({ id: id });
    }
    async create(toDo) {
        const newToDo = this.toDoRepository.create(toDo);
        return await this.toDoRepository.save(newToDo);
    }
    async update(id, toDo) {
        await this.toDoRepository.update(id, toDo);
        return await this.toDoRepository.findOneBy({ id: id });
    }
    async delete(id) {
        await this.toDoRepository.delete(id);
    }
};
exports.ToDosService = ToDosService;
exports.ToDosService = ToDosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(toDo_entity_1.ToDo)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ToDosService);
//# sourceMappingURL=toDos.service.js.map