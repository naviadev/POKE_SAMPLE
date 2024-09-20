import { IQuery } from '@nestjs/cqrs';

// * GetSampleByPokedex : SampleInfoComponent 출력을 위한 데이터 요청 쿼리
export class GetSampleByPokedex implements IQuery {
  private constructor(
    public readonly pokedex: number, // 도감번호 (포켓몬의 종류)
    public readonly number: number, // 가져올 레코드 갯수. 최신 데이터를 기준으로 n개
  ) {}

  static create(index: number, number: number) {
    return new GetSampleByPokedex(index, number);
  }
}
