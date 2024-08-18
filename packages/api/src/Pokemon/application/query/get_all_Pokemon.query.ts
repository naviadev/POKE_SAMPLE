import { IQuery } from '@nestjs/cqrs';

// 모든 포켓몬 데이터 반환 쿼리
export class GetAllPokemon implements IQuery {
  constructor() {}
}
