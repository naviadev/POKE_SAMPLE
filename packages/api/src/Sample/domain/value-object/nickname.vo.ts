import { ValidateMessage } from 'src/Sample/enum/validateMessage.enum';

export class Nickname {
  private readonly value: string;

  constructor(value: string) {
    if (!this.isValid(value)) {
      throw new Error(ValidateMessage.__NICKNAME_VALIDATE_ERROR);
    }
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }

  private isValid(value: string): boolean {
    const length = value.length;
    const pattern = /^[a-zA-Z0-9가-힣]{2,8}$/;
    return length >= 2 && length <= 8 && pattern.test(value);
  }

  static create(value: string): Nickname {
    return new Nickname(value);
  }
}
