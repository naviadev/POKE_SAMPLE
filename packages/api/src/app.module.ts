import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ORMconfig } from 'ormConfig';
import { SampleModule } from './Sample/sample.module';

@Module({
  imports: [TypeOrmModule.forRoot(ORMconfig), SampleModule],
})
export class AppModule {}
