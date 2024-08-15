import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';
import { SearchDTO } from '~/modules/searches/dto/search.dto';

type HistoryResponseToDTOParams = {
  items: SearchDTO[];
  pages: number;
};

class HistoryItemDTO {
  @IsString()
  title: string;

  constructor(data: HistoryItemDTO) {
    this.title = data.title;
  }

  public static toDTO(title: string) {
    return new HistoryItemDTO({ title });
  }
}

export class HistoryResponseDTO {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HistoryItemDTO)
  items: HistoryItemDTO[];

  @IsNumber()
  pages: number;

  constructor(data: HistoryResponseDTO) {
    this.items = data.items;
    this.pages = data.pages;
  }

  public static toDTO(data: HistoryResponseToDTOParams) {
    const payload = {
      items: data.items.map((item) => HistoryItemDTO.toDTO(item.name)),
      pages: data.pages,
    };
    return new HistoryResponseDTO(payload);
  }
}
