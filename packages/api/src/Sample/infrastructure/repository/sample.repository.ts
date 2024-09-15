import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SampleEntity } from '../entity/sample.entity';
import { Sample } from 'src/sample/domain/entity/sample';
import { SampleFactory } from 'src/sample/domain/factory/sample.factory';
import { SampleAdapter } from 'src/sample/application/adapter/sample.adapter';

@Injectable()
export class SampleRepository {
  /**
   * @param sampleRepository TypeORM Repository, SampleEntity를 주입.
   * @param sampleFactory Sample Domain 객체를 생성하는 팩토리 클래스
   */
  constructor(
    @InjectRepository(SampleEntity)
    private readonly sampleRepository: Repository<SampleEntity>,
    private readonly sampleFactory: SampleFactory,
  ) {}

  /**
   * @param sample Sample Domain 객체 (게시글 정보)
   * @description Sample을 Entity로 변환 후, 데이터베이스에 추가하는 쓰기 메서드
   */
  async save(sample: Sample) {
    try {
      const entity = SampleAdapter.toEntity(sample);
      await this.sampleRepository.save(entity);
    } catch (error) {
      throw new Error(`샘플 작성 실패 : ${error}`);
    }
  }

  /**
   * @param index 레코드 PK (게시글 번호)
   * @description Index 번호를 통해 특정 레코드를 추출하는 읽기 메서드. 게시글의 상세 데이터 출력을 위한 메서드
   * @returns 레코드의 모든 컬럼값 OR null
   */
  async findById(index: number): Promise<Sample | null> {
    try {
      const entity = await this.sampleRepository.findOne({ where: { index } });
      return entity ? this.toDomain(entity) : null;
    } catch (error) {
      console.error(`인덱스 조회 실패 : ${error}`);
      return null;
    }
  }

  /**
   * ! [ ] DELETE
   * @description 테스트 메서드. 모든 로직이 구현된 후 제거할 예정
   * @returns 모든 레코드
   */
  async findAll(): Promise<Sample[] | null> {
    try {
      const entities = await this.sampleRepository.find();
      return entities.map((entity) => this.toDomain(entity));
    } catch (error) {
      console.error(`테이블 조회 실패 : ${error}`);
      return null;
    }
  }

  /**
   * @description 최근 20개의 게시글을 반환하는 메서드. 날짜순으로 정렬, 20개를 간추려 반환한다.
   * @returns Sample []
   */
  async findLatestSample(): Promise<Sample[] | null> {
    try {
      // ORDER LIMIT
      const latestSamples = await this.sampleRepository.find({
        order: {
          // 날짜순으로 정렬
          createdAt: 'DESC',
        },
        take: 20, // LIMIT 20
      });
      return latestSamples.map((entity) => this.toDomain(entity));
    } catch (error) {
      console.error(`게시글 조회 에러 : ${error}`);
      return null;
    }
  }

  private toDomain(entity: SampleEntity): Sample {
    return this.sampleFactory.create(entity);
  }
}
