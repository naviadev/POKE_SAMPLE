import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { GetSampleHandler } from '../application/query/handler/getSampleHandler';
import { SampleResponseMessage } from '../enum/responseMessage.enum';
import { GetSampleQuery } from '../application/query/get_sample.query';

@Controller('/sample/query')
export class SampleQueryController {
  constructor(private readonly sampleQueryHandler: GetSampleHandler) {}

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
}
