import { ValidateMessage } from 'src/Sample/enum/validateMessage.enum';

export class Password {
  private readonly value: string;

  constructor(value: string) {
    if (!this.isValid(value)) {
      throw new Error(ValidateMessage.__PASSWORD_VALIDATE_ERROR);
    }
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }

  private isValid(value: string): boolean {
    const length = value.length;
    const pattern = /^[a-zA-Z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?\/\\|`~]{4,12}$/;
    return length >= 4 && length <= 12 && pattern.test(value);
  }

  static create(value: string): Password {
    return new Password(value);
  }
}
