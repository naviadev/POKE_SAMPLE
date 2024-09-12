import { ValidateMessage } from 'src/sample/enum/validateMessage.enum';
import { BaseValueObject } from './abstract/baseValueObject.abstract';

export class PartyTag extends BaseValueObject<string> {
  private readonly VALID_TAGS: string[] = ['싸이클', '랭크업', '대면'];

  private constructor(value: string) {
    super(value); // 부모 클래스의 생성자를 호출하며 유효성 검사를 수행
  }

  protected isValid(value: string): boolean {
    return this.VALID_TAGS.includes(value);
  }

  protected getValidationErrorMessage(): string {
    return ValidateMessage.__PARTY_TAG_VALIDATE_ERROR;
  }

  static create(value: string): PartyTag {
    try {
      return new PartyTag(value);
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
}
