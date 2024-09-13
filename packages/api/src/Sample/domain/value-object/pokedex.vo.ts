import { BaseValueObject } from './abstract/baseValueObject.abstract';
import { ValidateErrorMessage } from './message/validateErrorMessage.enum';
/**
 * @description 포켓몬 도감번호
 */
export class Pokedex extends BaseValueObject<number> {
  constructor(value: number) {
    super(value); // 부모 클래스의 생성자를 호출하며 유효성 검사를 수행
  }

  protected isValid(value: number): boolean {
    return value > 0 ? true : false;
  }

  protected getValidationErrorMessage(): string {
    return ValidateErrorMessage.__POKEDEX_VALIDATE_ERROR;
  }

  static create(value: number): Pokedex {
    try {
      return new Pokedex(value);
    } catch (error) {
      throw new Error(new Pokedex(value).getValidationErrorMessage());
    }
  }
}
