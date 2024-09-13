import { ValidateMessage } from 'src/sample/enum/validateMessage.enum';
import { BaseValueObject } from './abstract/baseValueObject.abstract';
/**
 * @description 비밀번호 객체 (비회원)
 */
export class Password extends BaseValueObject<string> {
  constructor(value: string) {
    super(value); // 부모 클래스의 생성자를 호출하며 유효성 검사를 수행
  }

  protected isValid(value: string): boolean {
    return value.length >= 4;
  }

  protected getValidationErrorMessage(): string {
    return ValidateMessage.__PASSWORD_VALIDATE_ERROR;
  }

  static create(value: string): Password {
    try {
      return new Password(value);
    } catch (error) {
      throw new Error(new Password(value).getValidationErrorMessage());
    }
  }
}
