import { Injectable } from '@nestjs/common';
import { MovesEntity } from '../entity/moves.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MovesRepository {
  /**
   * @param repository TypeORM Repository, MovesEntity 주입.
   */
  constructor(
    @InjectRepository(MovesEntity)
    private readonly repository: Repository<MovesEntity>,
  ) {}
}
