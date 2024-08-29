export class IVs {
  private readonly value: string; // Example: '6V' format

  constructor(value: string) {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
  static create(value: string) {
    return new IVs(value);
  }
}
