import { ValidateMessage } from 'src/sample/enum/validateMessage.enum';

export class Content {
  private readonly value: string;
  constructor(value: string) {
    if (!this.isVaildateContent(value)) {
      throw new Error(ValidateMessage.__CONTENT_VALIDATE_ERROR);
    }
    this.value = value;
  }
  getValue(): string {
    return this.value;
  }
  isVaildateContent(content: string) {
    return content.length <= 300 ? true : false;
  }
  static create(value: string): Content {
    return new Content(value);
  }
}
