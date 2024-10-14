import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPokemonTypesByPokedexQuery } from '../GetPokemonTypesByPokedex.query';
import { PokemonRepository } from 'src/pokemon/infrastructure/repository/pokemon.repository';

@QueryHandler(GetPokemonTypesByPokedexQuery)
export class GetPokemonTypesByPokedexHandler
  implements IQueryHandler<GetPokemonTypesByPokedexQuery>
{
  constructor(private readonly repository: PokemonRepository) {}
  execute(query: GetPokemonTypesByPokedexQuery): Promise<any> {
    const { pokedex } = query;
    try {
      return this.repository.findByPokemonTypes(pokedex);
    } catch (error) {
      throw error;
    }
  }
}
