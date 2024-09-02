import { IQueryHandler } from '@nestjs/cqrs';
import { ServiceMessage } from 'src/sample/enum/serviceMessage.enum';
import { SampleRepository } from 'src/sample/infrastructure/repository/sample.repository';

export class GetSampleHandler implements IQueryHandler<GetSampleHandler> {
  constructor(private readonly sampleRepository: SampleRepository) {}
  // 모든 샘플 데이터들을 가져올 것이기 떄문에 쿼리를 매개변수로 가져오는 것을 생략.
  async execute(): Promise<any> {
    const sample = await this.sampleRepository.findAll();
    if (!sample) {
      throw new Error(ServiceMessage.__CAN_NOT_FIND_SAMPLE);
    }
    return sample;
  }
}
