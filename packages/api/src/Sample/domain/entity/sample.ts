import { AggregateRoot } from '@nestjs/cqrs';
import { SampleId } from '../value-object/sampleId.vo';
import { Nickname } from '../value-object/nickname.vo';
import { Password } from '../value-object/password.vo';
import { Title } from '../value-object/title.vo';
import { Content } from '../value-object/content.vo';
import { Tag } from '../value-object/tag.vo';
import { ValidateMessage } from 'src/Sample/enum/validateMessage.enum';
import { SampleUpdatedEvent } from '../event/content_update.event';
import { Pokedex } from 'src/Shared/value-object/pokedex.vo';

/**
 * Domain
 * * Class : Sample
 * ? sample에 대한 기본적인 데이터 구조를 나타내며, Update 메서드를 통해 도메인 객체 자체를 업데이트 할 수 있음.
 */
export class Sample extends AggregateRoot {
  constructor(
    private readonly id: SampleId | null,
    private readonly nick_name: Nickname,
    private readonly password: Password,
    private readonly pokedex: Pokedex,
    private title: Title,
    private content: Content,
    private tags: Tag,
  ) {
    super();
  }

  // Getter methods
  getId(): SampleId {
    return this.id;
  }

  getNickname(): Nickname {
    return this.nick_name;
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

  getTags(): Tag {
    return this.tags;
  }

  updateSample(
    newTitle: Title | null,
    newContent: Content | null,
    newTags: Tag | null,
    password: Password,
  ): void {
    if (this.password !== password) {
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
    if (
      newTags !== null &&
      JSON.stringify(this.tags) !== JSON.stringify(newTags)
    ) {
      this.tags = newTags;
      updated = true;
    }

    if (updated) {
      // 해당 이벤트가 발생했다는 것을 어그리게이트로 알림. apply -> 어그리게이트 메서드 . 기록, 버스로 publish
      this.apply(
        new SampleUpdatedEvent(this.id, this.title, this.content, this.tags),
      );
    }
  }
}
