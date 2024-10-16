import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { MovesEntity } from 'src/moves/infrastructure/entity/moves.entity';
import { GetSearchMovesQuery } from '../getSearchMoves.query';
import { MovesRepository } from 'src/moves/infrastructure/repository/moves.repository';
@QueryHandler(GetSearchMovesQuery)
export class GetSeaerchMovesHandler
  implements IQueryHandler<GetSearchMovesQuery>
{
  constructor(private readonly movesRepository: MovesRepository) {}
  async execute(query: GetSearchMovesQuery): Promise<MovesEntity[]> {
    const { value } = query;
    const moves = await this.movesRepository.findMovesByNameKo(value);
    return moves;
  }
}
