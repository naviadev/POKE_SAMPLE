import { IQuery } from '@nestjs/cqrs';

export class GetSampleByIndexScrollQuery implements IQuery {
  private constructor(
    public readonly index: number, // 샘플 번호
    public readonly number: number, // 가져올 레코드 갯수. 최신 데이터를 기준으로 n개
  ) {}

  static create(index: number, number: number) {
    return new GetSampleByIndexScrollQuery(index, number);
  }
}
