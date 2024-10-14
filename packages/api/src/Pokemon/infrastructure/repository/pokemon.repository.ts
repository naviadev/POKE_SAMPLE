import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PokemonEntity } from '../entity/common/pokemon.entity';
import { Repository, Like } from 'typeorm';
import { PokemonFactory } from 'src/pokemon/domain/factory/pokemon.factory';
import { Pokemon } from 'src/pokemon/domain/entity/pokemon';

@Injectable()
export class PokemonRepository {
  constructor(
    @InjectRepository(PokemonEntity)
    private readonly pokemonRepository: Repository<PokemonEntity>,
    private readonly pokemonFactory: PokemonFactory,
  ) {}

  async findByPokemonName(name: string): Promise<Pokemon[] | null> {
    const entities = await this.pokemonRepository.find({
      where: { name: Like(`${name}%`) },
      take: 3,
    });
    return entities.map((entity) => this.toDomain(entity));
  }

  async findByPokemonTypes(pokedex: number): Promise<any> {
    const types = await this.pokemonRepository.find({
      where: { pokedex: pokedex },
      relations: ['types'],
    });
    return types[0].types;
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
