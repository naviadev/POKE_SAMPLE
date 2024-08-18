import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PokemonEntity } from '../entity/pokemon.entity';
import { Repository } from 'typeorm';
import { PokemonFactory } from 'src/Pokemon/domain/factory/pokemon.factory';
import { Pokemon } from 'src/Pokemon/domain/entity/pokemon';

@Injectable()
export class PokemonRepository {
  constructor(
    @InjectRepository(PokemonEntity)
    private readonly pokemonRepository: Repository<PokemonEntity>,
    private readonly pokemonFactory: PokemonFactory,
  ) {}

  // 미사용 메서드 .
  async getAll() {
    return await this.pokemonRepository.find();
  }

  async findByPokemonName(name: string): Promise<Pokemon | null> {
    const entity = await this.pokemonRepository.findOne({
      where: { name },
    });
    return entity ? this.toDomain(entity) : null;
  }

  private toDomain(entity: PokemonEntity): Pokemon {
    const { pokedex, name } = entity;
    const pokemon = this.pokemonFactory.create({ pokedex, name });
    return pokemon;
  }

  private toEntity(pokemon: Pokemon) {
    const pokemonEntity = new PokemonEntity();
    pokemonEntity.pokedex = pokemon.getPokedex().getValue();
    pokemonEntity.name = pokemon.getName().getValue();
    return pokemonEntity;
  }
}
