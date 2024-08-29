export class EVs {
  private readonly value: string; // Example: 'A252D6S252' format

  constructor(value: string) {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
  static create(value: string) {
    return new EVs(value);
  }
}
