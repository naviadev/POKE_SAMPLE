export class Ability {
  private readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
  static create(value: string) {
    return new Ability(value);
  }
}
