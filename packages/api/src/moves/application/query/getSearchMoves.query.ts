import { IQuery } from '@nestjs/cqrs';

export class GetSearchMovesQuery implements IQuery {
  constructor(public readonly value: string) {}
}
