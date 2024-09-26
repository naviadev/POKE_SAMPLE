import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { GetSampleHandler } from '../../application/query/handler/getSampleHandler';
import { SampleResponseMessage } from '../../enum/message/responseMessage.enum';
import { GetSampleQuery } from '../../application/query/query/getSample.query';
import { GetLatestSampleQuery } from '../../application/query/query/getLatestSample.query';
import { GetLatestSampleHandler } from '../../application/query/handler/getLatestSampleHandler';
import { GetSampleByIndexQuery } from 'src/sample/application/query/query/getSampleByIndex.query';
import { GetSampleByIndexHandler } from 'src/sample/application/query/handler/getSampleByIndexHandler';
import { GetSampleByPokedex } from 'src/sample/application/query/query/getSampleByPokedex.query';
import { GetSampleByPokedexHandler } from 'src/sample/application/query/handler/getSampleByPokedexHandler';
import { GetSampleByIndexScrollQuery } from 'src/sample/application/query/query/getSampleByIndexScroll.query';
import { GetSampleByIndexScrollHandler } from 'src/sample/application/query/handler/GetSampleByIndexScrollHandler';
import { withTryCatch } from 'src/shared/wrapper/tryCatch';
import { GetAdvancedSearch } from 'src/sample/application/query/query/getAdvancedSearch.query';
import { GetAdvancedSearchHandler } from 'src/sample/application/query/handler/getAdvancedSearchHandler';

@Controller('/sample/query')
export class SampleQueryController {
  constructor(
    private readonly sampleQueryHandler: GetSampleHandler,
    private readonly sampleLatestQueryHandler: GetLatestSampleHandler,
    private readonly sampleByIndexHandler: GetSampleByIndexHandler,
    private readonly sampleByPokedexHandler: GetSampleByPokedexHandler,
    private readonly sampleByIndexScrollHandler: GetSampleByIndexScrollHandler,
    private readonly advancedSearchHandler: GetAdvancedSearchHandler,
  ) {}

  /**
   * @description 테스트용 엔드포인트.
   * @returns Sample Table Records
   */
  @Get('/all')
  async getAllSample() {
    return await withTryCatch(async () => {
      const result = await this.sampleQueryHandler.execute(
        new GetSampleQuery(),
      );
      return result;
    }, SampleResponseMessage.__QUERY_FAILED);
  }

  /**
   * @description 최신의 게시물 20개를 정렬하여 가져오는 엔드포인트.
   * @returns 최신 게시글 20개의 기본데이터 (타이틀, 포켓몬, 도구, 샘플 타입)
   */
  @Get('/latest')
  async latestSample() {
    return await withTryCatch(async () => {
      const result = await this.sampleLatestQueryHandler.execute(
        new GetLatestSampleQuery(),
      );
      return result;
    }, SampleResponseMessage.__QUERY_FAILED);
  }

  /**
   *
   * @param index 게시글의 고유 PK
   * @returns PK를 통해 해당 게시글의 상세 내용을 가져오는 것을 목적으로 하는 엔드포인트.
   */
  @Get('/sampleWithIndex/:index')
  async sampleWithIndex(@Param('index') index: number) {
    return await withTryCatch(async () => {
      const query = await GetSampleByIndexQuery.create(index);
      const data = await this.sampleByIndexHandler.execute(query);
      return data;
    }, SampleResponseMessage.__QUERY_FAILED);
  }

  @Get('/sampleWithPokedex/:pokedex/:number')
  async sampleByPokedex(
    @Param('pokedex') pokedex: number,
    @Param('number') number: number,
  ) {
    return await withTryCatch(async () => {
      const query = await GetSampleByPokedex.create(pokedex, number);
      const data = await this.sampleByPokedexHandler.execute(query);
      return data;
    }, SampleResponseMessage.__QUERY_FAILED);
  }

  @Get('/sampleByIndexScroll/:index/:number')
  async sampleByIndexScroll(
    @Param('index', ParseIntPipe) index: number,
    @Param('number', ParseIntPipe) number: number,
  ) {
    return await withTryCatch(async () => {
      const query = await GetSampleByIndexScrollQuery.create(index, number);
      const data = await this.sampleByIndexScrollHandler.execute(query);
      return data;
    }, SampleResponseMessage.__QUERY_FAILED);
  }

  @Get('/advanced/*')
  async advancedSearch(@Param() param: any) {
    const query = GetAdvancedSearch.create(param);
    const data = await this.advancedSearchHandler.execute(query);
    return data;
  }
}
