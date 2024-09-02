import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ServiceMessage_Pokemon } from 'src/pokemon/enum/pokemon_service_error.enum';
import { SearchPokemonQuery } from '../searchPokemon.query';
import { PokemonRepository } from 'src/pokemon/infrastructure/repository/pokemon.repository';
import { Injectable } from '@nestjs/common';
// import { Pokemon } from 'src/Pokemon/domain/entity/pokemon';
import { transformToDTO } from '../../service/transformDTO';
import { PokemonDTO } from 'src/pokemon/presentation/DTO/pokemon.dto';
import { transformToDTOs } from '../../service/transformDTOs';
@Injectable()
@QueryHandler(SearchPokemonQuery)
export class SearchPokemonHandler implements IQueryHandler<SearchPokemonQuery> {
  constructor(private readonly pokemonRepository: PokemonRepository) {}
  async execute(
    query: SearchPokemonQuery,
  ): Promise<PokemonDTO | null | PokemonDTO[]> {
    let data;
    const { name } = query;
    try {
      data = await this.pokemonRepository.findByPokemonName(name);
    } catch (error) {
      console.error(ServiceMessage_Pokemon.__QUERY_EXEC_FAILED, error);
      throw error;
    } finally {
      if (Array.isArray(data)) {
        return transformToDTOs(data);
      } else {
        return transformToDTO(data);
      }
    }
  }
}
