import { ValidateMessage } from 'src/sample/enum/validateMessage.enum';
import { BaseValueObject } from './abstract/baseValueObject.abstract';
/**
 * @description 샘플 제목
 */
export class Title extends BaseValueObject<string> {
  constructor(value: string) {
    super(value); // 부모 클래스의 생성자를 호출하며 유효성 검사를 수행
  }

  protected isValid(value: string): boolean {
    const length = value.length;
    return length >= 2 && length <= 15;
  }

  protected getValidationErrorMessage(): string {
    return ValidateMessage.__TITLE_VALIDATE_ERROR;
  }

  static create(value: string): Title {
    try {
      return new Title(value);
    } catch (error) {
      throw new Error(new Title(value).getValidationErrorMessage());
    }
  }
}
