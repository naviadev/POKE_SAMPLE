import { ValidateMessage_Shared } from 'src/shared/enum/validateMessage.shared';

export class Pokedex {
  private readonly value: number;
  constructor(value: number) {
    if (!this.isValid(value)) {
      throw new Error(ValidateMessage_Shared.__POKEDEX_VALIDATE_ERROR);
    }
    this.value = value;
  }
  getValue(): number {
    return this.value;
  }
  private isValid(value: number): boolean {
    return value >= 1 && value <= 1025 ? true : false;
  }
  static create(value: number): Pokedex {
    return new Pokedex(value);
  }
}
