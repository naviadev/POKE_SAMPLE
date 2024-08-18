import { ValidateMessage_Pokemon } from 'src/Pokemon/enum/pokemon_validate_message.enum';

export class PokemonName {
  private readonly value: string;
  constructor(value: string) {
    if (!this.isValid(value)) {
      throw new Error(ValidateMessage_Pokemon.__POKEMON_NAME_VALIDATE_ERROR);
    }
    this.value = value;
  }
  getValue(): string {
    return this.value;
  }
  private isValid(value: string): boolean {
    const koreanRegex = /^[가-힣]+$/;
    return koreanRegex.test(value);
  }
  static create(value: string): PokemonName {
    return new PokemonName(value);
  }
}
