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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDosController = void 0;
const common_1 = require("@nestjs/common");
const toDos_service_1 = require("./toDos.service");
const toDo_entity_1 = require("./toDo.entity");
let ToDosController = class ToDosController {
    constructor(toDoService) {
        this.toDoService = toDoService;
    }
    async findAll() {
        return await this.toDoService.findAll();
    }
    async findOne(id) {
        const toDos = await this.toDoService.findAll();
        const toDo = toDos.find(toDo => toDo.id === id);
        if (!toDo) {
            throw new Error('ToDo not found');
        }
        else {
            return toDo;
        }
    }
    async create(toDo) {
        return await this.toDoService.create(toDo);
    }
    async update(id, toDo) {
        return this.toDoService.update(id, toDo);
    }
    async delete(id) {
        const toDo = await this.toDoService.findOne(id);
        if (!toDo) {
            throw new Error('ToDo not found');
        }
        return this.toDoService.delete(id);
    }
};
exports.ToDosController = ToDosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], ToDosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ToDosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [toDo_entity_1.ToDo]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ToDosController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, toDo_entity_1.ToDo]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ToDosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ToDosController.prototype, "delete", null);
exports.ToDosController = ToDosController = __decorate([
    (0, common_1.Controller)('toDos'),
    __metadata("design:paramtypes", [toDos_service_1.ToDosService])
], ToDosController);
//# sourceMappingURL=toDos.controller.js.map