import { ValidateMessage } from 'src/sample/enum/validateMessage.enum';
import { BaseValueObject } from './abstract/baseValueObject.abstract';

export class Tag extends BaseValueObject<string[]> {
  private constructor(values: string[]) {
    super(values); // 부모 클래스의 생성자를 호출하며 유효성 검사를 수행
  }

  protected isValid(values: string[]): boolean {
    return values.every((tag) => {
      const length = tag.length;
      return length >= 2 && length <= 6;
    });
  }

  protected getValidationErrorMessage(): string {
    return ValidateMessage.__TAG_VALIDATE_ERROR;
  }

  static create(values: string[]): Tag {
    try {
      return new Tag(values);
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
}
