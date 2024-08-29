export class Pokedex {
  private readonly value: number;

  constructor(value: number) {
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }
  static create(value: number) {
    return new Pokedex(value);
  }
}
