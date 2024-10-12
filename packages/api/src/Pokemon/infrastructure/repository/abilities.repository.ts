import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PokemonAbilitiesEntity } from '../entity/common/pokemon_abilities.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AbilitiesRepository {
  constructor(
    @InjectRepository(PokemonAbilitiesEntity)
    private readonly abilitiesRepository: Repository<PokemonAbilitiesEntity>,
  ) {}

  async getAbilities(pokedex: number) {
    const entity = await this.abilitiesRepository.findOne({
      where: { pokedex: pokedex },
    });
    return entity;
  }
}
