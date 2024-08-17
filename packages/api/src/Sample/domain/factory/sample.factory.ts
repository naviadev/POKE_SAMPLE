import { Injectable, Inject } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
import { Sample } from '../entity/sample';
import { Nickname } from '../value-object/nickname.vo';
import { Password } from '../value-object/password.vo';
import { Title } from '../value-object/title.vo';
import { Content } from '../value-object/content.vo';
import { Tag } from '../value-object/tag.vo';

type CreateSampleOptions = Readonly<{
  id?: string;
  nick_name: string;
  password: string;
  title: string;
  content: string;
  tags: string[];
}>;

@Injectable()
export class SampleFactory {
  @Inject(EventPublisher) private readonly eventPublisher: EventPublisher;
  create(options: CreateSampleOptions): Sample {
    return this.eventPublisher.mergeObjectContext(
      new Sample(
        null,
        Nickname.create(options.nick_name),
        Password.create(options.password),
        Title.create(options.title),
        Content.create(options.content),
        Tag.create(options.tags),
      ),
    );
  }
}
