import { SampleId } from '../value-object/sampleId.vo';
import { Title } from '../value-object/title.vo';
import { Content } from '../value-object/content.vo';
import { Tag } from '../value-object/tag.vo';
import { IEvent } from '@nestjs/cqrs';
/**
 * 추상적인 형태로 이벤트를 정의.
 */
export class SampleUpdatedEvent implements IEvent {
  constructor(
    public readonly id: SampleId,
    public readonly newTitle: Title,
    public readonly newContent: Content,
    public readonly newTags: Tag,
  ) {}
}
