import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { GetSampleHandler } from '../../application/query/handler/getSampleHandler';
import { SampleResponseMessage } from '../../enum/message/responseMessage.enum';
import { GetSampleQuery } from '../../application/query/query/getSample.query';
import { GetLatestSampleQuery } from '../../application/query/query/getLatestSample.query';
import { GetLatestSampleHandler } from '../../application/query/handler/getLatestSampleHandler';
import { GetSampleByIndexQuery } from 'src/sample/application/query/query/getSampleByIndex.query';
import { GetSampleByIndexHandler } from 'src/sample/application/query/handler/getSampleByIndexHandler';
import { GetSampleByPokedex } from 'src/sample/application/query/query/getSampleByPokedex.query';
import { GetSampleByPokedexHandler } from 'src/sample/application/query/handler/getSampleByPokedexHandler';

@Controller('/sample/query')
export class SampleQueryController {
  constructor(
    private readonly sampleQueryHandler: GetSampleHandler,
    private readonly sampleLatestQueryHandler: GetLatestSampleHandler,
    private readonly sampleByIndexHandler: GetSampleByIndexHandler,
    private readonly sampleByPokedexHandler: GetSampleByPokedexHandler,
  ) {}

  /**
   * @description 테스트용 엔드포인트.
   * @returns Sample Table Records
   */
  @Get('/all')
  async getAllSample() {
    try {
      const result = await this.sampleQueryHandler.execute(
        new GetSampleQuery(),
      );
      return result;
    } catch (error) {
      console.error(SampleResponseMessage.__QUERY_FAILED, error);
      throw new HttpException(
        SampleResponseMessage.__QUERY_FAILED,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * @description 최신의 게시물 20개를 정렬하여 가져오는 엔드포인트.
   * @returns 최신 게시글 20개의 기본데이터 (타이틀, 포켓몬, 도구, 샘플 타입)
   */
  @Get('/latest')
  async latestSample() {
    const result = await this.sampleLatestQueryHandler.execute(
      new GetLatestSampleQuery(),
    );
    return result;
  }

  /**
   *
   * @param index 게시글의 고유 PK
   * @returns PK를 통해 해당 게시글의 상세 내용을 가져오는 것을 목적으로 하는 엔드포인트.
   */
  @Get('/sampleWithIndex/:index')
  async sampleWithIndex(@Param('index') index: number) {
    const query = await GetSampleByIndexQuery.create(index);
    const data = await this.sampleByIndexHandler.execute(query);
    return data;
  }

  @Get('/sampleWithPokedex/:pokedex/:number')
  async sampleByPokedex(
    @Param('pokedex') pokedex: number,
    @Param('number') number: number,
  ) {
    const query = await GetSampleByPokedex.create(pokedex, number);
    const data = await this.sampleByPokedexHandler.execute(query);
    return data;
  }
}
