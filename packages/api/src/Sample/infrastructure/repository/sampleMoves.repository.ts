import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SampleMovesEntity } from '../entity/sample_moves.entity';
@Injectable()
export class SampleMovesRepository {
  /**
   * @param sampleRepository TypeORM Repository, SampleEntity를 주입.
   * @param sampleFactory Sample Domain 객체를 생성하는 팩토리 클래스
   */
  constructor(
    @InjectRepository(SampleMovesEntity)
    private readonly repository: Repository<SampleMovesEntity>,
    // private readonly sampleFactory: SampleFactory,
  ) {}

  create(data): SampleMovesEntity {
    return this.repository.create(data)[0];
  }

  async save(moves: SampleMovesEntity[]) {
    return this.repository.save(moves);
  }
}
