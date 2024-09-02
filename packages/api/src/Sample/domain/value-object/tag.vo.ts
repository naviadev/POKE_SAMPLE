import { ValidateMessage } from 'src/sample/enum/validateMessage.enum';

export class Tag {
  private readonly values: string[];
  constructor(values: string[]) {
    if (!this.isValid(values)) {
      throw new Error(ValidateMessage.__TAG_VALIDATE_ERROR);
    }
    this.values = values;
  }
  getValues(): string[] {
    return this.values;
  }
  private isValid(values: string[]): boolean {
    return values.every((tag) => {
      const length = tag.length;
      return length >= 2 && length <= 6;
    });
  }
  static create(values: string[]): Tag {
    return new Tag(values);
  }
}
