import {
  Controller,
  Get,
  Param,
  //  ParseIntPipe
} from '@nestjs/common';

//  * Utils Module
import { withTryCatch } from 'src/shared/wrapper/tryCatch';
import { SampleResponseMessage } from '../../enum/message/responseMessage.enum';

// 최신 데이터 20개를 갱신하기 위한 Query, Handler 모듈 .
import { GetLatestSampleQuery } from '../../application/query/query/getLatestSample.query';
import { GetLatestSampleHandler } from '../../application/query/handler/getLatestSampleHandler';
import { GetSampleByIndexQuery } from 'src/sample/application/query/query/getSampleByIndex.query';
import { GetSampleByIndexHandler } from 'src/sample/application/query/handler/getSampleByIndexHandler';

// import { GetSampleHandler } from '../../application/query/handler/getSampleHandler';

// import { GetSampleQuery } from '../../application/query/query/getSample.query';
// import { GetSampleByIndexQuery } from 'src/sample/application/query/query/getSampleByIndex.query';
// import { GetSampleByIndexHandler } from 'src/sample/application/query/handler/getSampleByIndexHandler';
// import { GetSampleByPokedex } from 'src/sample/application/query/query/getSampleByPokedex.query';
// import { GetSampleByPokedexHandler } from 'src/sample/application/query/handler/getSampleByPokedexHandler';
// import { GetSampleByIndexScrollQuery } from 'src/sample/application/query/query/getSampleByIndexScroll.query';
// import { GetSampleByIndexScrollHandler } from 'src/sample/application/query/handler/GetSampleByIndexScrollHandler';
// import { GetAdvancedSearch } from 'src/sample/application/query/query/getAdvancedSearch.query';
// import { GetAdvancedSearchHandler } from 'src/sample/application/query/handler/getAdvancedSearchHandler';

@Controller('/sample/query')
export class SampleQueryController {
  constructor(
    // private readonly sampleQueryHandler: GetSampleHandler,
    private readonly sampleLatestQueryHandler: GetLatestSampleHandler,
    private readonly sampleByIndexHandler: GetSampleByIndexHandler,
    // private readonly sampleByPokedexHandler: GetSampleByPokedexHandler,
    // private readonly sampleByIndexScrollHandler: GetSampleByIndexScrollHandler,
    // private readonly advancedSearchHandler: GetAdvancedSearchHandler,
  ) {}

  /**
   * @Label : SAMPLE-A-1
   * @description 최신의 게시물 20개를 정렬하여 가져오는 엔드포인트. 기초 데이터 요청 모듈.
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
   * @param index 게시글의 고유 PK
   * @returns PK를 통해 해당 게시글의 상세 내용을 가져오는 것을 목적으로 하는 엔드포인트.
   */
  @Get('/sampleWithIndex/:index')
  async sampleWithIndex(@Param('index') index: number) {
    return await withTryCatch(async () => {
      const data = await this.sampleByIndexHandler.execute(
        GetSampleByIndexQuery.create(index),
      );
      return data;
    }, SampleResponseMessage.__QUERY_FAILED);
  }

  // @Get('/sampleWithPokedex/:pokedex/:number')
  // async sampleByPokedex(
  //   @Param('pokedex') pokedex: number,
  //   @Param('number') number: number,
  // ) {
  //   return await withTryCatch(async () => {
  //     const query = await GetSampleByPokedex.create(pokedex, number);
  //     const data = await this.sampleByPokedexHandler.execute(query);
  //     return data;
  //   }, SampleResponseMessage.__QUERY_FAILED);
  // }

  // @Get('/sampleByIndexScroll/:index/:number')
  // async sampleByIndexScroll(
  //   @Param('index', ParseIntPipe) index: number,
  //   @Param('number', ParseIntPipe) number: number,
  // ) {
  //   return await withTryCatch(async () => {
  //     const query = await GetSampleByIndexScrollQuery.create(index, number);
  //     const data = await this.sampleByIndexScrollHandler.execute(query);
  //     return data;
  //   }, SampleResponseMessage.__QUERY_FAILED);
  // }

  // @Get('/advanced/*')
  // async advancedSearch(@Param() param: any) {
  //   const query = GetAdvancedSearch.create(param);
  //   const data = await this.advancedSearchHandler.execute(query);
  //   return data;
  // }
}
