import { ICommand } from '@nestjs/cqrs';

// CreateSampleCommand : 샘플 게시글 작성 커맨드
export class CreateSampleCommand implements ICommand {
  constructor(
    public readonly nick_name: string,
    public readonly password: string,
    public readonly title: string,
    public readonly content: string,
    public readonly tags: string[],
  ) {}
}
