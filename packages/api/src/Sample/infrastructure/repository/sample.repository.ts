import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, Repository } from 'typeorm';
import { SampleEntity } from '../entity/sample.entity';
// import { Sample } from 'src/sample/domain/entity/sample';
// import { SampleFactory } from 'src/sample/domain/factory/sample.factory';
// import { SampleAdapter } from 'src/sample/application/adapter/sample.adapter';

@Injectable()
export class SampleRepository {
  /**
   * @param sampleRepository TypeORM Repository, SampleEntity를 주입.
   * @param sampleFactory Sample Domain 객체를 생성하는 팩토리 클래스
   */
  constructor(
    @InjectRepository(SampleEntity)
    private readonly sampleRepository: Repository<SampleEntity>,
    // private readonly sampleFactory: SampleFactory,
  ) {}

  /**
   * @Label : SAMPLE-A-1
   * @description 최근 40개의 게시글을 반환하는 메서드. 날짜순으로 정렬, 40개를 간추려 반환한다.
   * @returns Sample []
   */

  async findLatestSample(): Promise<Partial<SampleEntity>[] | null> {
    try {
      const latestSamples = await this.sampleRepository.find({
        select: [
          'sample_index',
          'title',
          'abilities',
          'sample_tag_id',
          'create_at',
          'item',
        ],
        order: {
          create_at: 'DESC', // 날짜순 정렬
        },
        relations: ['pokemon', 'item'], // 관계를 포함하여 데이터를 로드할 필드
        take: 40,
      });
      return latestSamples;
    } catch (error) {
      console.error(`게시글 조회 에러: ${error}`);
      return null;
    }
  }

  /**
   * @param sample Sample Domain 객체 (게시글 정보)
   * @description Sample을 Entity로 변환 후, 데이터베이스에 추가하는 쓰기 메서드
   */
  // async save(sample: Sample) {
  //   try {
  //     const entity = SampleAdapter.toEntity(sample);
  //     await this.sampleRepository.save(entity);
  //   } catch (error) {
  //     throw new Error(`샘플 작성 실패 : ${error}`);
  //   }
  // }

  /**
   * @param index 레코드 PK (게시글 번호)
   * @description Index 번호를 통해 특정 레코드를 추출하는 읽기 메서드. 게시글의 상세 데이터 출력을 위한 메서드
   * @returns 레코드의 모든 컬럼값 OR null
   */
  async findByIndex(index: number): Promise<any | null> {
    try {
      const entity = await this.sampleRepository.findOne({
        select: ['sample_index', 'title', 'abilities', 'sample_tag_id'],
        where: { sample_index: index },
        relations: ['moves', 'moves.move', 'item', 'pokemon', 'nature'],
        // moves 테이블에 move를 연결.
        // 1. SampleEntity 에 moves 컬럼으로 SampleMovesEntity로 연결.
        // 2. SampleMovesEntity의 move 컬럼을 통해 MovesEntity
      });
      const formattedEntity = {
        ...entity,
        item: entity.item?.item_name, // 관계된 item의 필드 접근
        moves: entity.moves.map((sampleMove: any) => sampleMove.move.name_ko),
        nature: entity.nature?.nameKo, // nature 관계에서 nameKo만 가져오기
      };
      console.log(formattedEntity);
      return formattedEntity;
    } catch (error) {
      console.error(`인덱스 조회 실패 : ${error}`);
      return null;
    }
  }

  async findByPokedex(
    pokedex: number,
    number: number,
  ): Promise<Partial<SampleEntity>[] | null> {
    try {
      const samples = await this.sampleRepository.find({
        select: [
          'pokemon',
          'title',
          'abilities',
          'sample_tag_id',
          'item',
          'sample_index',
        ], // 필요한 필드만 선택
        where: { pokemon: { pokedex } }, // pokedex 컬럼이 해당 값과 일치하는지 필터링
        order: {
          create_at: 'DESC', // 최신순 정렬
        },
        take: number, // 요청된 레코드 수만큼 가져오기
      });
      return samples;
    } catch (error) {
      console.error(`포켓덱스 조회 에러: ${error}`);
      return null;
    }
  }

  async findByIndexScroll(
    lastIndex: number,
    count: number,
  ): Promise<Partial<SampleEntity>[] | null> {
    try {
      const samples = await this.sampleRepository.find({
        select: [
          'pokemon',
          'title',
          'abilities',
          'sample_tag_id',
          'item',
          'sample_index',
        ],
        where: { sample_index: LessThan(lastIndex) },
        order: {
          sample_index: 'DESC',
        },
        take: count,
      });

      return samples;
    } catch (error) {
      console.error(`index 조회 에러: ${error}`);
      return null;
    }
  }

  async findAdvancedSearchData(conditions): Promise<SampleEntity[]> {
    const samples = await this.sampleRepository.find({
      select: [
        'pokemon',
        'title',
        'abilities',
        'sample_tag_id',
        'item',
        'sample_index',
      ],
      where: conditions,
      order: {
        sample_index: 'DESC',
      },
    });
    return samples;
  }

  // private toDomain(entity: SampleEntity): Sample {
  // return this.sampleFactory.create(entity);
  // }
}
