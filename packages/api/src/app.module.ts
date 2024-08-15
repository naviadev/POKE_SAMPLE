import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'naviadev',
      password: '1020',
      database: 'pokesample',
      // entities: [Post, User],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
