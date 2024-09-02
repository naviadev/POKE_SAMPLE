import { ValidateMessage } from 'src/sample/enum/validateMessage.enum';

export class PartyTag {
  private readonly value: string;
  private readonly VALID_TAGS: string[] = ['싸이클', '랭크업', '대면'];

  private constructor(value: string) {
    if (this.isValidatePartyTag(value)) {
      this.value = value;
    } else {
      throw new Error(ValidateMessage.__PARTY_TAG_VALIDATE_ERROR);
    }
  }

  private isValidatePartyTag(value: string): boolean {
    return this.VALID_TAGS.includes(value);
  }

  getValue() {
    return this.value;
  }

  static create(value: string) {
    return new PartyTag(value);
  }
}
