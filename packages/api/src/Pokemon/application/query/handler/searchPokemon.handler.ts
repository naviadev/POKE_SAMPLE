import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ServiceMessage_Pokemon } from 'src/Pokemon/enum/pokemon_service_error.enum';
import { SearchPokemonQuery } from '../search_pokemon.query';
import { PokemonRepository } from 'src/Pokemon/infrastructure/repository/pokemon.repository';
import { Injectable } from '@nestjs/common';
import { Pokemon } from 'src/Pokemon/domain/entity/pokemon';
import { transformToDTO } from '../../service/transformDTO';
import { PokemonDTO } from 'src/Pokemon/presentation/DTO/pokemon.dto';

@Injectable()
@QueryHandler(SearchPokemonQuery)
export class SearchPokemonHandler implements IQueryHandler<SearchPokemonQuery> {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  async execute(query: SearchPokemonQuery): Promise<PokemonDTO | null> {
    let data;
    const { name } = query;
    try {
      data = await this.pokemonRepository.findByPokemonName(name);
    } catch (error) {
      console.error(ServiceMessage_Pokemon.__QUERY_EXEC_FAILED, error);
      throw error;
    } finally {
      return transformToDTO(data);
    }

    // return sample;
  }
}
