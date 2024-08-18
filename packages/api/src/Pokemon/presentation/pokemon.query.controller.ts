import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { SearchPokemonHandler } from '../application/query/handler/searchPokemon.handler';
import { SearchPokemonQuery } from '../application/query/search_pokemon.query';

@Controller('/pokemon/query')
export class PokemonQueryController {
  constructor(private searchPokemonHandler: SearchPokemonHandler) {}

  @Get('/all')
  async getAll() {}

  @Get('/search/:name')
  async SearchPokemonByName(@Param('name') name: string) {
    try {
      const query = new SearchPokemonQuery(name);
      const data = await this.searchPokemonHandler.execute(query);
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      new HttpException('error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
