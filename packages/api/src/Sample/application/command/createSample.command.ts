import { ICommand } from '@nestjs/cqrs';
import { CreateSampleDTO } from 'src/sample/presentation/dto/create_sample.dto';

// CreateSampleCommand : 샘플 게시글 작성 커맨드
export class CreateSampleCommand implements ICommand {
  constructor(
    public readonly pokedex: number,
    public readonly title: string,
    public readonly ability: string,
    public readonly item: string,
    public readonly content: string,
    public readonly tera: string,
    public readonly evs: string,
    public readonly ivs: string,
    public readonly id: string,
    public readonly password: string,
    public readonly party_tag: string,
    public readonly sample_tag: string,
  ) {}
  static create(dto: CreateSampleDTO) {
    return new CreateSampleCommand(
      dto.pokedex,
      dto.title,
      dto.ability,
      dto.item,
      dto.content,
      dto.tera,
      dto.evs,
      dto.ivs,
      dto.id,
      dto.password,
      dto.party_tag,
      dto.sample_tag,
    );
  }
}
