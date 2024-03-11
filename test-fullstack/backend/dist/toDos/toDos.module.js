"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDosModule = void 0;
const common_1 = require("@nestjs/common");
const toDos_controller_1 = require("./toDos.controller");
const toDos_service_1 = require("./toDos.service");
const typeorm_1 = require("@nestjs/typeorm");
const toDo_entity_1 = require("./toDo.entity");
let ToDosModule = class ToDosModule {
};
exports.ToDosModule = ToDosModule;
exports.ToDosModule = ToDosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([toDo_entity_1.ToDo])],
        controllers: [toDos_controller_1.ToDosController],
        providers: [toDos_service_1.ToDosService]
    })
], ToDosModule);
//# sourceMappingURL=toDos.module.js.map