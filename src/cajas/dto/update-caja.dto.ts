import { PartialType } from '@nestjs/swagger';
import { CreateCajaDto } from './create-caja.dto.js';

export class UpdateCajaDto extends PartialType(CreateCajaDto) {}
