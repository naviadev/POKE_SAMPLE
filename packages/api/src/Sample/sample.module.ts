import { Module } from '@nestjs/common';
import { CreateSampleCommandHandler } from './application/command/handler/create_sample.handler';
import { SampleCommandController } from './presentation/sample.command.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { SampleFactory } from './domain/factory/sample.factory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SampleEntity } from './infrastructure/entity/sample.entity';
import { SampleRepository } from './infrastructure/repository/sample.repository';
import { GetSampleHandler } from './application/query/handler/get_sample.handler';
import { SampleQueryController } from './presentation/sample.query.controller';
const application = [CreateSampleCommandHandler, GetSampleHandler];
const infrastructure = [SampleRepository];
const domain = [SampleFactory];
@Module({
  imports: [TypeOrmModule.forFeature([SampleEntity]), CqrsModule],
  controllers: [SampleCommandController, SampleQueryController],
  providers: [...application, ...domain, ...infrastructure],
})
export class SampleModule {}
