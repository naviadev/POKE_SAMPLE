import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { GetSampleHandler } from '../../application/query/handler/getSampleHandler';
import { SampleResponseMessage } from '../../enum/message/responseMessage.enum';
import { GetSampleQuery } from '../../application/query/query/getSample.query';
import { GetLatestSampleQuery } from '../../application/query/query/getLatestSample.query';
import { GetLatestSampleHandler } from '../../application/query/handler/getLatestSampleHandler';

@Controller('/sample/query')
export class SampleQueryController {
  constructor(
    private readonly sampleQueryHandler: GetSampleHandler,
    private readonly sampleLatestQueryHandler: GetLatestSampleHandler,
  ) {}

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

  @Get('/latest')
  async latestSample() {
    const result = await this.sampleLatestQueryHandler.execute(
      new GetLatestSampleQuery(),
    );
    return result;
  }
}
