import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SampleModule } from './Sample/sample.module';
import { PokemonModule } from './Pokemon/pokemon.module';
import { LoggerMiddleware } from './Shared/middleware/logger.mw';
import { AppDataSource } from 'appDataSource';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    SampleModule,
    PokemonModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
