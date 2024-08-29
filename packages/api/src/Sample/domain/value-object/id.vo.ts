export class Id {
  private readonly value: string;

  constructor(value: string) {
    if (!this.isValid(value)) {
      throw new Error('Invalid ID');
    }
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }

  private isValid(value: string): boolean {
    return value.length > 0;
  }

  equals(id: Id): boolean {
    return this.value === id.getValue();
  }
  static create(id: string) {
    return new Id(id);
  }
}
