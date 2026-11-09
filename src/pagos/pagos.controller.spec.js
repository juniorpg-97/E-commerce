import { Test, TestingModule } from '@nestjs/testing';
import { PagosController } from './pagos.controller.js';
describe('PagosController', () => {
    let controller;
    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [PagosController],
        }).compile();
        controller = module.get(PagosController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=pagos.controller.spec.js.map