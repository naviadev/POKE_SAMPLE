import { BaseValueObject } from './abstract/baseValueObject.abstract';
import { ValidateErrorMessage } from './message/validateErrorMessage.enum';
/**
 * @description 포켓몬 특성
 */
export class Ability extends BaseValueObject<string> {
  private constructor(value: string) {
    super(value); // 생성자에서 유효성 검사 수행
  }

  protected isValid(value: string): boolean {
    const koreanRegex = /^[가-힣\s]+$/; // 한글과 공백만 허용
    return koreanRegex.test(value);
  }

  protected getValidationErrorMessage(): string {
    return ValidateErrorMessage.__ABILITY_VALIDATE_ERROR; // 에러 메시지 반환
  }

  /**
   * @description 팩토리 메서드를 통해 외부에서 객체의 구조를 작성하지 않아도 인스턴스할 수 있게끔 작성.
   * @param value Ability의 값
   * @returns Ability Value-Object 객체 또는 예외
   */
  static create(value: string): Ability {
    // 유효성 검사를 수행하고, 유효하지 않으면 예외를 발생시킵니다.
    if (new Ability(value).isValid(value)) {
      return new Ability(value);
    } else {
      throw new Error(new Ability(value).getValidationErrorMessage());
    }
  }
}
