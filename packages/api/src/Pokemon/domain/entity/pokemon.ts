import { AggregateRoot } from '@nestjs/cqrs';
import { Pokedex } from 'src/Shared/value-object/pokedex.vo';
import { PokemonName } from '../value-object/pokemon_name.vo';

export class Pokemon extends AggregateRoot {
  constructor(
    private readonly pokedex: Pokedex,
    private readonly name: PokemonName,
  ) {
    super();
  }

  getPokedex(): Pokedex {
    return this.pokedex;
  }

  getName(): PokemonName {
    return this.name;
  }
}
