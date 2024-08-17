import { ICommandHandler } from '@nestjs/cqrs';
import { CreateSampleCommand } from '../create_sample.command';

import { SampleFactory } from 'src/Sample/domain/factory/sample.factory';
import { SampleRepository } from 'src/Sample/infrastructure/repository/sample.repository';

/**
 * * Class : CreateSampleCommandHandler
 * 작성자 : @naviadev / 2024-08-17
 * @class CreateSampleCommandHandler
 * @param private readonly sampleFactory: SampleFactory, private readonly sampleRepository: SampleRepository
 * @description : Sample 상태 변경 요청을 처리하며, 비즈니스 로직을 실행하는 역할을 수행한다.
 */
export class CreateSampleCommandHandler
  implements ICommandHandler<CreateSampleCommand>
{
  constructor(
    private readonly sampleFactory: SampleFactory,
    private readonly sampleRepository: SampleRepository,
  ) {}
  async execute(command: CreateSampleCommand): Promise<any> {
    const { nick_name, password, title, content, tags } = command;
    const sample = this.sampleFactory.create({
      nick_name,
      password,
      title,
      content,
      tags,
    });
    await this.sampleRepository.save(sample);
  }
}
