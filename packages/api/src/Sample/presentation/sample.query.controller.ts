import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { GetSampleHandler } from '../application/query/handler/get_sample.handler';
import { SampleResponseMessage } from '../enum/responseMessage.enum';

@Controller('/sample/query')
export class SampleQueryController {
  constructor(private readonly sampleQueryHandler: GetSampleHandler) {}

  @Get('/all')
  async getAllSample() {
    try {
      const result = await this.sampleQueryHandler.execute();
      return result;
    } catch (error) {
      console.error(SampleResponseMessage.__QUERY_FAILED, error);
      throw new HttpException('', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
