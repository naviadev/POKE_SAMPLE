import { Module } from '@nestjs/common';
import { SearchPokemonHandler } from './application/query/handler/searchPokemon.handler';
import { PokemonRepository } from './infrastructure/repository/pokemon.repository';
import { PokemonFactory } from './domain/factory/pokemon.factory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonEntity } from './infrastructure/entity/pokemon.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { PokemonQueryController } from './presentation/pokemon.query.controller';

const application = [SearchPokemonHandler];
const infrastructure = [PokemonRepository];
const domain = [PokemonFactory];

@Module({
  imports: [TypeOrmModule.forFeature([PokemonEntity]), CqrsModule],
  controllers: [PokemonQueryController],
  providers: [...application, ...infrastructure, ...domain],
})
export class PokemonModule {}
