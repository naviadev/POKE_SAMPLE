import { Injectable, Inject } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
import { Sample } from '../entity/sample';
import { Id } from '../value-object/id.vo';
import { Password } from '../value-object/password.vo';
import { Title } from '../value-object/title.vo';
import { Content } from '../value-object/content.vo';
import { Pokedex } from '../value-object/pokedex.vo';
import { Ability } from '../value-object/ability.vo';
import { Item } from '../value-object/item.vo';
import { Tera } from '../value-object/tera.vo';
import { IVs } from '../value-object/ivs.vo';
import { EVs } from '../value-object/evs.vo';
import { PartyTag } from '../value-object/partyTag.vo';
import { SampleTag } from '../value-object/sampleTag.vo';
import CreateSampleOptions from 'src/shared/type/sampleOptions.interface';
import { Moves } from '../value-object/moves.vo';
import { Nature } from '../value-object/nature.vo';
@Injectable()
export class SampleFactory {
  @Inject(EventPublisher) private readonly eventPublisher: EventPublisher;

  create(options: CreateSampleOptions): Sample {
    const sample = new Sample(
      options.index, // SampleId는 null로 시작함 (자동 생성됨)
      Id.create(options.id),
      Password.create(options.password),
      Pokedex.create(options.pokedex),
      Title.create(options.title),
      Content.create(options.content),
      Ability.create(options.ability),
      Item.create(options.item),
      Tera.create(options.tera),
      IVs.create(options.ivs),
      EVs.create(options.evs),
      PartyTag.create(options.party_tag),
      SampleTag.create(options.sample_tag),
      Moves.create(options.moves),
      Nature.create(options.nature),
    );

    // EventPublisher로 객체를 래핑하여 이벤트를 발행할 수 있도록 설정
    const sampleWithEventPublisher =
      this.eventPublisher.mergeObjectContext(sample);

    // 필요한 초기 이벤트가 있다면 발행 가능
    // sampleWithEventPublisher.apply(new SampleCreatedEvent(sampleWithEventPublisher));

    return sampleWithEventPublisher;
  }
}
