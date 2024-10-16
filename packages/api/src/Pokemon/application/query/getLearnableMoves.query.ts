import { IQuery } from '@nestjs/cqrs';
export class GetLearnableMovesQuery implements IQuery {
  constructor(public readonly pokedex: number) {}
}
