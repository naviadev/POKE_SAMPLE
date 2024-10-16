import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SampleModule } from './sample/sample.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { LoggerMiddleware } from './shared/middleware/logger.mw';
import { AppDataSource } from 'appDataSource';
import { MovesModule } from './moves/moves.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    SampleModule,
    PokemonModule,
    MovesModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
