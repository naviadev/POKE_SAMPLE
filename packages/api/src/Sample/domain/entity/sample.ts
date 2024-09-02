import { AggregateRoot } from '@nestjs/cqrs';
import { Index } from '../value-object/index.vo';
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
import { ValidateMessage } from 'src/sample/enum/validateMessage.enum';
import { PartyTag } from '../value-object/partyTag.vo';
import { SampleTag } from '../value-object/sampleTag.vo';
// import { SampleUpdatedEvent } from '../event/content_update.event';

export class Sample extends AggregateRoot {
  constructor(
    private readonly index: Index | null,
    private readonly id: Id,
    private readonly password: Password,
    private readonly pokedex: Pokedex,
    private title: Title,
    private content: Content,
    private ability: Ability,
    private item: Item,
    private tera: Tera,
    private ivs: IVs,
    private evs: EVs,
    private partyTag: PartyTag,
    private sampleTag: SampleTag,
  ) {
    super();
  }

  // Getter methods
  getIndex(): Index | null {
    return this.index;
  }

  getId(): Id {
    return this.id;
  }

  getPassword(): Password {
    return this.password;
  }

  getTitle(): Title {
    return this.title;
  }

  getContent(): Content {
    return this.content;
  }

  getAbility(): Ability {
    return this.ability;
  }

  getItem(): Item {
    return this.item;
  }

  getTera(): Tera {
    return this.tera;
  }

  getIVs(): IVs {
    return this.ivs;
  }

  getEVs(): EVs {
    return this.evs;
  }
  getPokedex(): Pokedex {
    return this.pokedex;
  }

  updateSample(
    newTitle: Title | null,
    newContent: Content | null,
    newAbility: Ability | null,
    newItem: Item | null,
    newTera: Tera | null,
    newIVs: IVs | null,
    newEVs: EVs | null,
    password: Password,
  ): void {
    if (!this.password.equals(password)) {
      throw new Error(ValidateMessage.__PASSWORD_MATCH_ERROR);
    }

    let updated = false;
    if (newTitle !== null && this.title !== newTitle) {
      this.title = newTitle;
      updated = true;
    }
    if (newContent !== null && this.content !== newContent) {
      this.content = newContent;
      updated = true;
    }
    if (newAbility !== null && this.ability !== newAbility) {
      this.ability = newAbility;
      updated = true;
    }
    if (newItem !== null && this.item !== newItem) {
      this.item = newItem;
      updated = true;
    }
    if (newTera !== null && this.tera !== newTera) {
      this.tera = newTera;
      updated = true;
    }
    if (newIVs !== null && this.ivs !== newIVs) {
      this.ivs = newIVs;
      updated = true;
    }
    if (newEVs !== null && this.evs !== newEVs) {
      this.evs = newEVs;
      updated = true;
    }

    if (updated) {
      // this.apply(new SampleUpdatedEvent());
    }
  }
}
