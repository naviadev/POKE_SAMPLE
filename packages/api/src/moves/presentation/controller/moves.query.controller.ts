import { Controller, Get, Param } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetSearchMovesQuery } from 'src/moves/application/query/getSearchMoves.query';
import { MOVES_RESPONSE_MASSAGE } from 'src/moves/enum/movesResponse.message.enum';
import { withTryCatch } from 'src/shared/wrapper/tryCatch';

@Controller('/moves/query')
export class MovesQueryController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get('/search/:value')
  async GetSearchMoves(@Param('value') value: string) {
    return await withTryCatch(async () => {
      return this.queryBus.execute(new GetSearchMovesQuery(value));
    }, MOVES_RESPONSE_MASSAGE.SEARCH_ERROR);
  }
}
