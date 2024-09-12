import { BaseValueObject } from './abstract/baseValueObject.abstract';
import { ValidateErrorMessage } from './message/validateErrorMessage.enum';

export class EVs extends BaseValueObject<string> {
  private constructor(value: string) {
    super(value); // 유효성 검사를 수행하며 값 설정
  }

  // 유효성 검사 로직
  protected isValid(value: string): boolean {
    if (value !== null && value !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  // 유효성 검사 실패 시 반환할 에러 메시지
  protected getValidationErrorMessage(): string {
    return ValidateErrorMessage.__EVS_VALIDATE_ERROR;
  }

  /**
   * @description 팩토리 메서드를 통해 외부에서 객체의 구조를 작성하지 않아도 인스턴스할 수 있게끔 작성.
   * @param value EVs의 값
   * @returns EVs Value-Object 객체 또는 예외
   */
  static create(value: string): EVs {
    // 유효성 검사를 수행하고, 유효하지 않으면 예외를 발생시킵니다.
    if (new EVs(value).isValid(value)) {
      return new EVs(value);
    } else {
      throw new Error(new EVs(value).getValidationErrorMessage());
    }
  }
}
