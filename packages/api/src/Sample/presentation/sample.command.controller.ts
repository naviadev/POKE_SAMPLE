import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateSampleCommandHandler } from '../application/command/handler/create_sample.handler';
import { CreateSampleDTO } from './dto/create_sample.dto';
import { CreateSampleCommand } from '../application/command/create_sample.command';
import { SampleResponseMessage } from '../enum/responseMessage.enum';

@Controller('/sample/command')
export class SampleCommandController {
  constructor(
    private readonly createSampleHandler: CreateSampleCommandHandler,
  ) {}

  @Post('/create')
  @HttpCode(200)
  async create(@Body() sampleData: CreateSampleDTO) {
    const { nick_name, password, pokedex, title, content, tags } = sampleData;
    try {
      const command = new CreateSampleCommand(
        nick_name,
        password,
        pokedex,
        title,
        content,
        tags,
      );
      await this.createSampleHandler.execute(command);
    } catch (error) {
      console.error(SampleResponseMessage.__CREATE_FAILED, error);
      throw new HttpException('', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
