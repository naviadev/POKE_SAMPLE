import { Controller, Post, Body } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateSampleCommand } from 'src/sample/application/command/command/createSample.command';
import { UpdateSampleCommand } from 'src/sample/application/command/command/updateSample.command';
import { SampleResponseMessage } from 'src/sample/enum/message/responseMessage.enum';
import { withTryCatch } from 'src/shared/wrapper/tryCatch';
import { SampleCreateDTO } from '../dto/sampleCreate.dto';

@Controller('/sample/command')
export class SampleCommandController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('/create')
  async createSample(@Body() body: any) {
    return await withTryCatch(async () => {
      return await this.commandBus.execute(new CreateSampleCommand(body));
    }, SampleResponseMessage.__CREATE_FAILED);
  }

  @Post('/update')
  async updateSample(@Body() body: SampleCreateDTO) {
    return await this.commandBus.execute(new UpdateSampleCommand(body));
  }
}
