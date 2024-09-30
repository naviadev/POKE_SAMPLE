import { Module } from '@nestjs/common';
import { MovesQueryController } from './presentation/controller/moves.query.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovesEntity } from './infrastructure/entity/moves.entity';

const controller = [MovesQueryController];

@Module({
  imports: [TypeOrmModule.forFeature([MovesEntity]), CqrsModule],
  controllers: [...controller],
  providers: [],
})
export class MovesModule {}
