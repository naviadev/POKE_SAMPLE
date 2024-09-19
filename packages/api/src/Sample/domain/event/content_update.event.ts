import { Title } from '../value-object/title.vo';
import { Content } from '../value-object/content.vo';

import { IEvent } from '@nestjs/cqrs';
/**
 * 추상적인 형태로 이벤트를 정의.
 */
export class SampleUpdatedEvent implements IEvent {
  constructor(
    public readonly newTitle: Title,
    public readonly newContent: Content,
  ) {}
}
