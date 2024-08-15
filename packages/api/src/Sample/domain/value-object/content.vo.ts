export class Content {
  private readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }

  static create(value: string): Content {
    return new Content(value);
  }
}
