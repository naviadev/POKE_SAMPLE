import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateSampleCommandHandler } from '../application/command/handler/createSample.handler';
import { CreateSampleDTO } from './dto/create_sample.dto';
import { CreateSampleCommand } from '../application/command/createSample.command';
import { SampleResponseMessage } from '../enum/responseMessage.enum';

@Controller('/sample/command')
export class SampleCommandController {
  /**
   * @Providers : createSampleHandler : 샘플 작성 handler
   */
  constructor(
    private readonly createSampleHandler: CreateSampleCommandHandler,
  ) {}

  // 샘플 작성 엔드포인트 (DTO를 데이터베이스에 삽입하여 글을 작성할 수 있도록 하는 엔드포인트)
  @Post('/create')
  @HttpCode(200)
  async create(@Body() body: CreateSampleDTO) {
    try {
      // factory method 를 통해 dto => command 로 convert
      const command = CreateSampleCommand.create(body);
      // command 실행.(데이터베이스에 샘플 데이터를 추가할 수 있도록)
      const result = await this.createSampleHandler.execute(command);
      // 결과물 반환
      return result;
    } catch (error) {
      //에러 처리
      console.error(SampleResponseMessage.__CREATE_FAILED, error);
      throw new HttpException(
        SampleResponseMessage.__CREATE_FAILED,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
