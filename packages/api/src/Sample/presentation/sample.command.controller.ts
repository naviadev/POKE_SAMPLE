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
  async create(@Body() body: CreateSampleDTO) {
    console.log(body);
    try {
      const command = CreateSampleCommand.createCommand(body);
      const result = await this.createSampleHandler.execute(command);
      return result;
    } catch (error) {
      console.error(SampleResponseMessage.__CREATE_FAILED, error);
      throw new HttpException(
        SampleResponseMessage.__CREATE_FAILED,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    // try {
    //   const command = new CreateSampleCommand(
    //     nick_name,
    //     password,
    //     pokedex,
    //     title,
    //     content,
    //     tags,
    //   );
    //   await this.createSampleHandler.execute(command);
    // } catch (error) {

    //   );
    // }
  }
}
