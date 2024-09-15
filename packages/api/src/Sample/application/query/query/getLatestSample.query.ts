import { IQuery } from '@nestjs/cqrs';

// * GetSampleQuery : 초기 모든 게시글을 가져와 출력하기 위한 쿼리
export class GetLatestSampleQuery implements IQuery {
  constructor() {}
}
