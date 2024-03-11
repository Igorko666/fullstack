import { Test, TestingModule } from '@nestjs/testing';
import { ToDosController } from './toDos.controller';

describe('ToDosController', () => {
  let controller: ToDosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToDosController],
    }).compile();

    controller = module.get<ToDosController>(ToDosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
