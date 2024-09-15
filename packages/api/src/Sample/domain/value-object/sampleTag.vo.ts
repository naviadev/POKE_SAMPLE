import { ValidateMessage } from 'src/sample/enum/message/validateMessage.enum';
import { BaseValueObject } from './abstract/baseValueObject.abstract';
/**
 * @description 샘플의 역할
 */
export class SampleTag extends BaseValueObject<string> {
  private readonly VALID_TAGS: string[] = [
    '특수 어태커',
    '물리 어태커',
    '물리막이',
    '특수막이',
    '딜탱',
    '스카프',
    '기점',
    '변칙',
    '스위퍼',
    '선봉',
    '서포터',
  ];

  private constructor(value: string) {
    super(value); // 부모 클래스의 생성자를 호출하며 유효성 검사를 수행
  }

  protected isValid(value: string): boolean {
    return this.VALID_TAGS.includes(value);
  }

  protected getValidationErrorMessage(): string {
    return ValidateMessage.__SAMPLE_TAG_VALIDATE_ERROR;
  }

  static create(value: string): SampleTag {
    try {
      return new SampleTag(value);
    } catch (error) {
      throw new Error(new SampleTag(value).getValidationErrorMessage());
    }
  }
}
