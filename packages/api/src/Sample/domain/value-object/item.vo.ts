import { BaseValueObject } from './abstract/baseValueObject.abstract';
import { ValidateErrorMessage } from './message/validateErrorMessage.enum';

export class Item extends BaseValueObject<string> {
  private constructor(value: string) {
    super(value); // 유효성 검사를 수행하며 값 설정
  }

  // 유효성 검사 로직
  protected isValid(value: string): boolean {
    return value.length > 0; // 예시: 빈 문자열이 아닌지 확인
  }
  // 유효성 검사 실패 시 반환할 에러 메시지
  protected getValidationErrorMessage(): string {
    return ValidateErrorMessage.__ITEM_VALIDATE_ERROR; // 적절한 에러 메시지를 반환
  }

  /**
   * @description 팩토리 메서드를 통해 외부에서 객체의 구조를 작성하지 않아도 인스턴스할 수 있게끔 작성.
   * @param value Item의 값
   * @returns Item Value-Object 객체
   */
  static create(value: string): Item {
    try {
      return new Item(value);
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
}
