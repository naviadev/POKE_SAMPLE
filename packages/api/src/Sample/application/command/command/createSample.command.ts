import { ICommand } from '@nestjs/cqrs';
import { SampleCreateDTO } from 'src/sample/presentation/dto/sampleCreate.dto';

export class CreateSampleCommand implements ICommand {
  constructor(public readonly data: SampleCreateDTO) {}
}
