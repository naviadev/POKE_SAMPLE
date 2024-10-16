import { Injectable } from '@nestjs/common';
import { GetLearnableMovesQuery } from '../getLearnableMoves.query';
import { QueryHandler } from '@nestjs/cqrs';

import { PokemonRepository } from 'src/pokemon/infrastructure/repository/pokemon.repository';

@QueryHandler(GetLearnableMovesQuery)
@Injectable()
export class GetLearnableMovesQueryHandler {
  constructor(private readonly repository: PokemonRepository) {}

  async execute(query: GetLearnableMovesQuery) {
    const pokedex = query.pokedex;
    const data = this.repository.getLearnableMoves(pokedex);
    try {
    } catch (error) {
      console.error(error);
    } finally {
      return data;
    }
  }
}
