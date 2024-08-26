import { QueryHandler } from '@nestjs/cqrs';
import { GetAbilities } from '../getAbilities.query';
import { Injectable } from '@nestjs/common';
import { AbilitiesRepository } from 'src/Pokemon/infrastructure/repository/abilities.repository';

@QueryHandler(GetAbilities)
@Injectable()
export class GetAbilitiesHandler {
  constructor(private readonly abilitiesRepository: AbilitiesRepository) {}

  async execute(query: GetAbilities) {
    const pokedex = query.pokedex;
    let data;
    try {
      data = await this.abilitiesRepository.getAbilities(pokedex);
    } catch (error) {
      console.error(error);
    } finally {
      return data;
    }
  }
}
