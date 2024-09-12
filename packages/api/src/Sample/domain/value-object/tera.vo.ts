import { BaseValueObject } from './abstract/baseValueObject.abstract';
import { ValidateErrorMessage } from './message/validateErrorMessage.enum';

export class Tera extends BaseValueObject<string> {
  constructor(value: string) {
    super(value); // 부모 클래스의 생성자를 호출하며 유효성 검사를 수행
  }

  protected isValid(value: string): boolean {
    return value.trim().length > 0;
  }

  protected getValidationErrorMessage(): string {
    return ValidateErrorMessage.__TERA_VALIDATE_ERROR;
  }

  static create(value: string): Tera {
    try {
      return new Tera(value);
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
}
