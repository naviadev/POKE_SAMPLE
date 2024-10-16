import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { SampleFactory } from './domain/factory/sample.factory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SampleEntity } from './infrastructure/entity/sample.entity';
import { SampleRepository } from './infrastructure/repository/sample.repository';
import { SampleQueryController } from './presentation/controller/sample.query.controller';
import { GetLatestSampleHandler } from './application/query/handler/getLatestSampleHandler';
import { SampleMovesEntity } from './infrastructure/entity/sample_moves.entity';
import { GetSampleByIndexHandler } from './application/query/handler/getSampleByIndexHandler';
import { CreateSampleHandler } from './application/command/handler/createSample.handler';
import { SampleMovesRepository } from './infrastructure/repository/sampleMoves.repository';
import { SampleCommandController } from './presentation/controller/sample.command.controller';
import { GetSampleByPokedexHandler } from './application/query/handler/getSampleByPokedexHandler';
import { GetSampleByIndexScrollHandler } from './application/query/handler/getSampleByIndexScrollHandler';
import { GetAdvancedSearchHandler } from './application/query/handler/getAdvancedSearchHandler';

const application = [
  GetLatestSampleHandler,
  GetSampleByIndexHandler,
  CreateSampleHandler,
  GetSampleByPokedexHandler,
  GetSampleByIndexScrollHandler,
  GetAdvancedSearchHandler,
];
const infrastructure = [SampleRepository, SampleMovesRepository];
const domain = [SampleFactory];
const controllers = [SampleCommandController, SampleQueryController];
@Module({
  imports: [
    TypeOrmModule.forFeature([SampleEntity, SampleMovesEntity]),
    CqrsModule,
  ],
  controllers: [...controllers],
  providers: [...application, ...domain, ...infrastructure],
})
export class SampleModule {}
