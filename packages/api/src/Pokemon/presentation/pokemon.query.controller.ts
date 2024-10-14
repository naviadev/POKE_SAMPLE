import { Controller, Get, Param } from '@nestjs/common';
import { SearchPokemonHandler } from '../application/query/handler/searchPokemon.handler';
import { SearchPokemonQuery } from '../application/query/searchPokemon.query';
import { GetPokemonTypesByPokedexHandler } from '../application/query/handler/getPokemonTypesByPokedex.handler';
import { withTryCatch } from 'src/shared/wrapper/tryCatch';
import { GetPokemonTypesByPokedexQuery } from '../application/query/GetPokemonTypesByPokedex.query';
import { POKEMON_RESPONSE_ERROR_MESSAGE } from '../enum/pokemon_response_message.enum';

@Controller('/pokemon/query')
export class PokemonQueryController {
  constructor(
    private readonly searchPokemonHandler: SearchPokemonHandler,
    private readonly getPokemonTypesHandler: GetPokemonTypesByPokedexHandler,
  ) {}

  // 검색한 포켓몬을 3개만큼 추려 반환하는 엔드포인트.
  @Get('/search/:name')
  async SearchPokemonByName(@Param('name') name: string) {
    return await withTryCatch(async () => {
      const data = await this.searchPokemonHandler.execute(
        new SearchPokemonQuery(name),
      );
      return data;
    }, POKEMON_RESPONSE_ERROR_MESSAGE.QUERY_SEARCH_ERROR);
  }

  @Get('/types/:pokedex')
  async GetPokemonTypes(@Param('pokedex') pokedex: number) {
    return await withTryCatch(async () => {
      const result = await this.getPokemonTypesHandler.execute(
        new GetPokemonTypesByPokedexQuery(pokedex),
      );
      return result;
    }, POKEMON_RESPONSE_ERROR_MESSAGE.QUERY_TYPES_ERROR);
  }
}
