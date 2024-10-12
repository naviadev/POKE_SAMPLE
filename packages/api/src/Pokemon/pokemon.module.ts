import { Module } from '@nestjs/common';
import { SearchPokemonHandler } from './application/query/handler/searchPokemon.handler';
import { PokemonRepository } from './infrastructure/repository/pokemon.repository';
import { PokemonFactory } from './domain/factory/pokemon.factory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonEntity } from './infrastructure/entity/common/pokemon.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { PokemonQueryController } from './presentation/pokemon.query.controller';
import { GetAbilitiesHandler } from './application/query/handler/getAbilities.handler';
import { AbilitiesRepository } from './infrastructure/repository/abilities.repository';
import { PokemonAbilitiesEntity } from './infrastructure/entity/common/pokemon_abilities.entity';
import { AbilitiesController } from './presentation/abilities.query.controller';

const application = [SearchPokemonHandler, GetAbilitiesHandler];
const infrastructure = [PokemonRepository, AbilitiesRepository];
const domain = [PokemonFactory];

@Module({
  imports: [
    TypeOrmModule.forFeature([PokemonEntity, PokemonAbilitiesEntity]),
    CqrsModule,
  ],
  controllers: [PokemonQueryController, AbilitiesController],
  providers: [...application, ...infrastructure, ...domain],
})
export class PokemonModule {}
