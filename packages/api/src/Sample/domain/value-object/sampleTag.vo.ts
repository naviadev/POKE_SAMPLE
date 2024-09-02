import { ValidateMessage } from 'src/sample/enum/validateMessage.enum';

export class SampleTag {
  private readonly value: string;
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
    if (this.isValidatePartyTag(value)) {
      this.value = value;
    } else {
      throw new Error(ValidateMessage.__SAMPLE_TAG_VALIDATE_ERROR);
    }
  }

  private isValidatePartyTag(value: string): boolean {
    return this.VALID_TAGS.includes(value);
  }

  getValue() {
    return this.value;
  }

  static create(value: string) {
    return new SampleTag(value);
  }
}
