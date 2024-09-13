import { BaseValueObject } from './abstract/baseValueObject.abstract';
import { ValidateErrorMessage } from './message/validateErrorMessage.enum';
/**
 * @description 포켓몬 성격 값
 */
export class Nature extends BaseValueObject<string> {
  constructor(value: string) {
    super(value); // 부모 클래스의 생성자를 호출하며 유효성 검사를 수행
  }
  protected isValid(value: string): boolean {
    return value.length > 0;
  }
  protected getValidationErrorMessage(): string {
    return ValidateErrorMessage.__NATURE_VALIDATE_ERROR;
  }
  static create(value: string): Nature {
    try {
      return new Nature(value);
    } catch (error) {
      throw new Error(new Nature(value).getValidationErrorMessage());
    }
  }
}
