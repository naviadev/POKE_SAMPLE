import { IQuery } from '@nestjs/cqrs';

// 포켓몬 검색 쿼리
export class SearchPokemonQuery implements IQuery {
  constructor(public readonly name: string) {}
}
