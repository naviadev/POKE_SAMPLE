import { IQuery } from '@nestjs/cqrs';
export class GetPokemonTypesByPokedexQuery implements IQuery {
  constructor(public readonly pokedex: number) {}
}
