import { BaseValueObject } from './abstract/baseValueObject.abstract';
import { ValidateErrorMessage } from './message/validateErrorMessage.enum';
/**
 * @description 사용자 ID
 */
export class Id extends BaseValueObject<string> {
  private constructor(value: string) {
    super(value); // 유효성 검사를 수행하며 값 설정
  }

  // 유효성 검사 로직
  protected isValid(value: string): boolean {
    return value.length > 0;
  }

  // 유효성 검사 실패 시 반환할 에러 메시지
  protected getValidationErrorMessage(): string {
    return ValidateErrorMessage.__ID_VALIDATE_ERROR; // 적절한 에러 메시지를 반환
  }

  /**
   * @description 팩토리 메서드를 통해 외부에서 객체의 구조를 작성하지 않아도 인스턴스할 수 있게끔 작성.
   * @param value ID의 값
   * @returns Id Value-Object 객체
   */
  static create(value: string): Id {
    try {
      return new Id(value);
    } catch (error) {
      throw new Error(new Id(value).getValidationErrorMessage());
    }
  }
}
