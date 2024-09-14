import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ServiceMessage } from 'src/sample/enum/serviceMessage.enum';
import { SampleRepository } from 'src/sample/infrastructure/repository/sample.repository';
import { GetLatestSampleQuery } from '../getLatestSample.query';

@QueryHandler(GetLatestSampleQuery)
export class GetLatestSampleHandler
  implements IQueryHandler<GetLatestSampleQuery>
{
  constructor(private readonly sampleRepository: SampleRepository) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async execute(query: GetLatestSampleQuery): Promise<any> {
    const samples = await this.sampleRepository.findLatestSample();
    if (!samples || samples.length === 0) {
      console.log('샘플을 찾을 수 없습니다.');
      throw new Error(ServiceMessage.__CAN_NOT_FIND_SAMPLE);
    }
    return samples;
  }
}
