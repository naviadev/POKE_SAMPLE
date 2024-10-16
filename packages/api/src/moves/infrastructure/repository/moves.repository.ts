import { Injectable } from '@nestjs/common';
import { MovesEntity } from '../entity/moves.entity';
import { Like, Repository } from 'typeorm';
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

  async findMovesByNameKo(name: string): Promise<MovesEntity[]> {
    const entities = await this.repository.find({
      where: { name_ko: Like(`${name}%`) },
      take: 3,
    });

    return entities;
  }
}
