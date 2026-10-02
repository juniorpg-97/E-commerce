import { Injectable } from '@nestjs/common';

@Injectable()
export class PagosService {
  procesarWebhook(payload: any) {
    console.log('========================================');
    console.log('       WEBHOOK DE MOCKPAY RECIBIDO');
    console.log('========================================');
    console.log('Payload recibido:', payload);
    console.log('========================================');

    return {
      received: true,
    };
  }
}
