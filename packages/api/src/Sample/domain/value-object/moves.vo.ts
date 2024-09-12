import { BaseValueObject } from './abstract/baseValueObject.abstract';
import { ValidateErrorMessage } from './message/validateErrorMessage.enum';

export class Moves extends BaseValueObject<string[]> {
  constructor(value: string[]) {
    super(value); // 부모 클래스의 생성자를 호출하며 유효성 검사를 수행
  }

  /**
   * @description 배열의 유효성을 검사하는 메서드
   * @param value 검사할 값
   * @returns 유효성 검사 결과
   */
  protected isValid(value: string[]): boolean {
    return value.length > 0 && value.every((item) => typeof item === 'string');
  }

  /**
   * @description 유효성 검사 실패 시의 에러 메시지
   * @returns 에러 메시지
   */
  protected getValidationErrorMessage(): string {
    return ValidateErrorMessage.__MOVES_VALIDATE_ERROR;
  }

  /**
   * @description 팩토리 메서드
   * @param value Moves의 값
   * @returns Moves Value-Object 객체
   */
  static create(value: string[]): Moves {
    try {
      return new Moves(value);
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
}
