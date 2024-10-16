import { ICommand } from '@nestjs/cqrs';

export class UpdateSampleCommand implements ICommand {
  constructor(public readonly data: any) {}
}
