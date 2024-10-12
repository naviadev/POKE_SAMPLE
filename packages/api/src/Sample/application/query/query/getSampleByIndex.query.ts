import { IQuery } from '@nestjs/cqrs';

// * GetSampleQuery : SampleInfoComponent 출력을 위한 데이터 요청 쿼리
export class GetSampleByIndexQuery implements IQuery {
  private constructor(public readonly index: number) {}

  /**
   * @param index 샘플 고유 Index
   * @returns GetSampleByIndexQuery
   */
  static create(index: number) {
    return new GetSampleByIndexQuery(index);
  }
}
