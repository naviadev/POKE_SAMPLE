import { BaseValueObject } from './abstract/baseValueObject.abstract';
import { ValidateErrorMessage } from './message/validateErrorMessage.enum';
/**
 * @description 포켓몬 개체값
 */
export class IVs extends BaseValueObject<string> {
  private constructor(value: string) {
    super(value); // 유효성 검사를 수행하며 값 설정
  }

  // 유효성 검사 로직
  protected isValid(value: string): boolean {
    return value.length > 0;
  }

  // 유효성 검사 실패 시 반환할 에러 메시지
  protected getValidationErrorMessage(): string {
    return ValidateErrorMessage.__IVS_VALIDATE_ERROR; // 적절한 에러 메시지를 반환
  }

  /**
   * @description 팩토리 메서드를 통해 외부에서 객체의 구조를 작성하지 않아도 인스턴스할 수 있게끔 작성.
   * @param value IVs의 값
   * @returns IVs Value-Object 객체
   */
  static create(value: string): IVs {
    try {
      return new IVs(value);
    } catch (error) {
      throw new Error(new IVs(value).getValidationErrorMessage());
    }
  }
}
