import { Response } from 'express';
import { Prisma } from '../../../generated/prisma/client.js';
import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class PrismaExceptionFilter implements ExceptionFilter {
    catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost): Response<any, Record<string, any>>;
}
//# sourceMappingURL=prisma-exception.filter.d.ts.map