import { BaseValueObject } from './abstract/baseValueObject.abstract';
import { ValidateErrorMessage } from './message/validateErrorMessage.enum';

export class Pokedex extends BaseValueObject<number> {
  constructor(value: number) {
    super(value); // 부모 클래스의 생성자를 호출하며 유효성 검사를 수행
  }

  protected isValid(value: number): boolean {
    // 숫자가 유효한 범위에 있는지 검사할 수 있습니다.
    return value >= 0;
  }

  protected getValidationErrorMessage(): string {
    return ValidateErrorMessage.__POKEDEX_VALIDATE_ERROR;
  }

  static create(value: number): Pokedex {
    try {
      return new Pokedex(value);
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
}
