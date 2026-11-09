import { Test, TestingModule } from '@nestjs/testing';
import { PagosService } from './pagos.service.js';
describe('PagosService', () => {
    let service;
    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [PagosService],
        }).compile();
        service = module.get(PagosService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=pagos.service.spec.js.map