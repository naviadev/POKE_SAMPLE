import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
//  * Utils Module
import { withTryCatch } from 'src/shared/wrapper/tryCatch';
import { SampleResponseMessage } from '../../enum/message/responseMessage.enum';
import { QueryBus } from '@nestjs/cqrs';
// * Query
import { GetLatestSampleQuery } from '../../application/query/query/getLatestSample.query';
import { GetSampleByIndexQuery } from 'src/sample/application/query/query/getSampleByIndex.query';
import { GetSampleByPokedex } from 'src/sample/application/query/query/getSampleByPokedex.query';
import { GetSampleByIndexScrollQuery } from 'src/sample/application/query/query/getSampleByIndexScroll.query';
import { GetAdvancedSearch } from 'src/sample/application/query/query/getAdvancedSearch.query';

@Controller('/sample/query')
export class SampleQueryController {
  constructor(private readonly queryBus: QueryBus) {}
  /**
   * @Label : SAMPLE-A-1
   * @description 최신의 게시물 20개를 정렬하여 가져오는 엔드포인트. 기초 데이터 요청 모듈.
   * @returns 최신 게시글 20개의 기본데이터 (타이틀, 포켓몬, 도구, 샘플 타입)
   */
  @Get('/latest')
  async latestSample() {
    return await withTryCatch(async () => {
      return await this.queryBus.execute(new GetLatestSampleQuery());
    }, SampleResponseMessage.__QUERY_FAILED);
  }
  /**
   * @param index 게시글의 고유 PK
   * @returns PK를 통해 해당 게시글의 상세 내용을 가져오는 것을 목적으로 하는 엔드포인트.
   */
  @Get('/sampleWithIndex/:index')
  async sampleWithIndex(@Param('index') index: number) {
    return await withTryCatch(async () => {
      return await this.queryBus.execute(new GetSampleByIndexQuery(index));
    }, SampleResponseMessage.__QUERY_FAILED);
  }

  @Get('/sampleWithPokedex/:pokedex/:number')
  async sampleByPokedex(
    @Param('pokedex') pokedex: number,
    @Param('number') number: number,
  ) {
    return await withTryCatch(async () => {
      return await this.queryBus.execute(
        new GetSampleByPokedex(pokedex, number),
      );
    }, SampleResponseMessage.__QUERY_FAILED);
  }

  @Get('/sampleByIndexScroll/:index/:number')
  async sampleByIndexScroll(
    @Param('index', ParseIntPipe) index: number,
    @Param('number', ParseIntPipe) number: number,
  ) {
    return await withTryCatch(async () => {
      return await this.queryBus.execute(
        new GetSampleByIndexScrollQuery(index, number),
      );
    }, SampleResponseMessage.__QUERY_FAILED);
  }

  @Get('/advanced/*')
  async advancedSearch(@Param() param: any) {
    return await withTryCatch(async () => {
      return await this.queryBus.execute(GetAdvancedSearch.create(param));
    }, SampleResponseMessage.__QUERY_FAILED);
  }
}
