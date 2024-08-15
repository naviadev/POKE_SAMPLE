import { ValidateMessage } from 'src/Sample/enum/validateMessage.enum';

export class Title {
  private readonly value: string;

  constructor(value: string) {
    if (!this.isValid(value)) {
      throw new Error(ValidateMessage.__TITLE_VALIDATE_ERROR);
    }
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }

  private isValid(value: string): boolean {
    const length = value.length;
    return length >= 2 && length <= 15;
  }

  static create(value: string): Title {
    return new Title(value);
  }
}
