import { IQuery } from '@nestjs/cqrs';

// 특성 요청 쿼리
export class SearchAbilities implements IQuery {
  constructor(public readonly pokedex: number) {}
}
