import { Injectable } from '@nestjs/common';
import { HistoryResponseDTO } from '~/modules/searches/dto/query-history.dto';
import { HashDB } from '~/services/db/hash';
import { UseCase } from '~/shared/core/use-case';
import { PaginatedDto } from '~/shared/dto/paginated';

type ListQueryHistoryParams = PaginatedDto;
type ListQueryHistoryResponse = HistoryResponseDTO;

@Injectable()
export class ListQueryHistory
  implements UseCase<ListQueryHistoryParams, ListQueryHistoryResponse>
{
  constructor(private readonly hashDB: HashDB) {}

  execute({ page }: ListQueryHistoryParams): ListQueryHistoryResponse {
    const history = this.hashDB.list(page);
    return HistoryResponseDTO.toDTO(history);
  }
}
