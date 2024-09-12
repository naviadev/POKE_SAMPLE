import { BaseValueObject } from './abstract/baseValueObject.abstract';
import { ValidateErrorMessage } from './message/validateErrorMessage.enum';

export class Content extends BaseValueObject<string> {
  private constructor(value: string) {
    super(value);
  }
  protected isValid(value: string): boolean {
    return value.length <= 300;
  }
  protected getValidationErrorMessage(): string {
    return ValidateErrorMessage.__CONTENT_VALIDATE_ERROR;
  }
  /**
   * @description 팩토리 메서드를 통해 외부에서 객체의 구조를 작성하지 않아도 인스턴스할 수 있게끔 작성.
   * @param value Content의 값
   * @returns Content Value-Object 객체
   */
  static create(value: string): Content | null {
    try {
      return new Content(value);
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
}
