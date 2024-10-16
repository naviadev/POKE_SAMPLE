import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { SampleEntity } from 'src/sample/infrastructure/entity/sample.entity';
import { CreateSampleCommand } from '../command/createSample.command';
import { SampleMovesEntity } from 'src/sample/infrastructure/entity/sample_moves.entity';
import { SampleRepository } from 'src/sample/infrastructure/repository/sample.repository';
import { SampleMovesRepository } from 'src/sample/infrastructure/repository/sampleMoves.repository';

@CommandHandler(CreateSampleCommand)
export class CreateSampleHandler
  implements ICommandHandler<CreateSampleCommand>
{
  constructor(
    @InjectRepository(SampleEntity)
    private readonly sampleRepository: SampleRepository,
    @InjectRepository(SampleMovesEntity)
    private readonly sampleMovesRepository: SampleMovesRepository,
  ) {}

  async execute(command: CreateSampleCommand) {
    const { data } = command;
    const sampleEntity = await this.sampleRepository.create(data);
    console.log(sampleEntity);
    const sampleRecord = await this.sampleRepository.save(sampleEntity);
    const sampleMovesEntities = data.moves_id.map((move) =>
      this.sampleMovesRepository.create({
        sample: sampleRecord,
        moves_id: move,
      }),
    );
    console.log(sampleMovesEntities);
    this.sampleMovesRepository.save(sampleMovesEntities);
  }
}
