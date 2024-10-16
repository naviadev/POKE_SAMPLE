import { Module } from '@nestjs/common';
import { MovesQueryController } from './presentation/controller/moves.query.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovesEntity } from './infrastructure/entity/moves.entity';
import { GetSeaerchMovesHandler } from './application/query/handler/getSearchMoves.handler';
import { MovesRepository } from './infrastructure/repository/moves.repository';

const controller = [MovesQueryController];
const handler = [GetSeaerchMovesHandler];
const repository = [MovesRepository];
@Module({
  imports: [TypeOrmModule.forFeature([MovesEntity]), CqrsModule],
  controllers: [...controller],
  providers: [...handler, ...repository],
})
export class MovesModule {}
