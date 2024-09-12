export abstract class BaseValueObject<T> {
  // VO 객체에 포함되어야하는 값. 제네릭을 통해 다양한 VO 객체에 상속 가능할 수 있도록 선언.
  protected readonly value: T;
  constructor(value: T) {
    this.validate(value); // 유효성 검사를 수행
    this.value = value;
  }
  /**
   * @returns : 멤버 변수인 value를 외부에서 사용할 수 있도록 Public 형태의 Getter 메서드
   */
  getValue(): T {
    return this.value;
  }
  /**
   * @description 추상 메서드. 유효성검사를 실행하고, Boolean형을 반환한다.
   * @param value 유효성 검사를 진행해야하는 값
   */
  protected abstract isValid(value: T): boolean;
  /**
   * @description VO 객체마다 유효성 검사 에러메세지를 다르게 출력하기 위한 메서드
   */
  protected abstract getValidationErrorMessage(): string;

  /**
   * @description 유효성 검사를 진행하는 메서드
   * @param value 객체의 값
   */
  private validate(value: T): void {
    if (!this.isValid(value)) {
      throw new Error(this.getValidationErrorMessage());
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static create(value: any): BaseValueObject<any> {
    throw new Error('Method not implemented.');
  }
}
