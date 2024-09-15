import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ServiceMessage } from 'src/sample/enum/message/serviceMessage.enum';
import { SampleRepository } from 'src/sample/infrastructure/repository/sample.repository';
import { GetSampleQuery } from '../query/getSample.query';

@QueryHandler(GetSampleQuery)
export class GetSampleHandler implements IQueryHandler<GetSampleQuery> {
  constructor(private readonly sampleRepository: SampleRepository) {}
  // 모든 샘플 데이터들을 가져올 것이기 떄문에 쿼리를 매개변수로 가져오는 것을 생략.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async execute(query: GetSampleQuery): Promise<any> {
    const samples = await this.sampleRepository.findAll();
    if (!samples || samples.length === 0) {
      console.log('샘플을 찾을 수 없습니다.');
      throw new Error(ServiceMessage.__CAN_NOT_FIND_SAMPLE);
    }
    return samples;
  }
}
