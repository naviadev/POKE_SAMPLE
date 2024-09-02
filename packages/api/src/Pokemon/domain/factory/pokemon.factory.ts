import { Inject, Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
import { Pokemon } from '../entity/pokemon';
import { Pokedex } from 'src/shared/value-object/pokedex.vo';
import { PokemonName } from '../value-object/pokemon_name.vo';

type PokemonOptions = Readonly<{
  pokedex: number;
  name: string;
}>;

@Injectable()
export class PokemonFactory {
  @Inject(EventPublisher) private readonly eventPublisher: EventPublisher;

  create(options: PokemonOptions) {
    return this.eventPublisher.mergeObjectContext(
      new Pokemon(new Pokedex(options.pokedex), new PokemonName(options.name)),
    );
  }
}
