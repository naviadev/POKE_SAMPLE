import { AggregateRoot } from '@nestjs/cqrs';
import { SampleId } from '../value-object/sampleId.vo';
import { Nickname } from '../value-object/nickname.vo';
import { Password } from '../value-object/password.vo';
import { Title } from '../value-object/title.vo';
import { Content } from '../value-object/content.vo';
import { Tag } from '../value-object/tag.vo';
export class Sample extends AggregateRoot {
  constructor(
    private readonly id: SampleId,
    private nickname: Nickname,
    private password: Password,
    private title: Title,
    private content: Content,
    private tags: Tag[],
  ) {
    super();
  }
}
