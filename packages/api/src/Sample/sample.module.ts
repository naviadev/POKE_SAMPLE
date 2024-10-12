import { Module } from '@nestjs/common';
// import { CreateSampleCommandHandler } from './application/command/handler/createSample.handler';
// import { SampleCommandController } from './presentation/controller/sample.command.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { SampleFactory } from './domain/factory/sample.factory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SampleEntity } from './infrastructure/entity/sample.entity';
import { SampleRepository } from './infrastructure/repository/sample.repository';
// import { GetSampleHandler } from './application/query/handler/getSampleHandler';
import { SampleQueryController } from './presentation/controller/sample.query.controller';
import { GetLatestSampleHandler } from './application/query/handler/getLatestSampleHandler';
import { SampleMovesEntity } from './infrastructure/entity/sample_moves.entity';
import { GetSampleByIndexHandler } from './application/query/handler/getSampleByIndexHandler';
// import { GetSampleByIndexHandler } from './application/query/handler/getSampleByIndexHandler';
// import { GetSampleByPokedexHandler } from './application/query/handler/getSampleByPokedexHandler';
// import { GetSampleByIndexScrollHandler } from './application/query/handler/GetSampleByIndexScrollHandler';
// import { GetAdvancedSearchHandler } from './application/query/handler/getAdvancedSearchHandler';
const application = [
  // CreateSampleCommandHandler,
  // GetSampleHandler,
  GetLatestSampleHandler,
  GetSampleByIndexHandler,
  // GetSampleByPokedexHandler,
  // GetSampleByIndexScrollHandler,
  // GetAdvancedSearchHandler,
];
const infrastructure = [SampleRepository];
const domain = [SampleFactory];
const controllers = [
  // SampleCommandController,
  SampleQueryController,
];
@Module({
  imports: [
    TypeOrmModule.forFeature([SampleEntity, SampleMovesEntity]),
    CqrsModule,
  ],
  controllers: [...controllers],
  providers: [...application, ...domain, ...infrastructure],
})
export class SampleModule {}
