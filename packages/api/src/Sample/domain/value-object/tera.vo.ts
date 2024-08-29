export class Tera {
  private readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
  static create(value: string) {
    return new Tera(value);
  }
}
