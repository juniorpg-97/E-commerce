import { Injectable } from '@nestjs/common';

@Injectable()
export class PagosService {
  procesarWebhook(payload: any) {
    console.log('Webhook recibido:', payload);

    return {
      received: true,
    };
  }
}
