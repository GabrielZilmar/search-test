import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class PaginatedDto {
  @IsNumber()
  @Type(() => Number)
  @IsPositive()
  @IsOptional()
  page = 1;
}
