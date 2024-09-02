import { ValidateMessage } from 'src/sample/enum/validateMessage.enum';

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
    console.log(value.length);
    console.log(value);
    return value.length >= 4;
  }

  equals(password: Password): boolean {
    return this.value === password.getValue();
  }
  static create(value: string) {
    return new Password(value);
  }
}
