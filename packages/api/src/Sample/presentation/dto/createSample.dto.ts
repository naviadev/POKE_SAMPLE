import { IsString, IsNumber, IsArray } from 'class-validator';

export class CreateSampleDTO {
  @IsString()
  title: string;

  @IsNumber()
  pokedex: number;

  @IsString()
  ability: string;

  @IsString()
  item: string;

  @IsString()
  content: string;

  @IsString()
  tera: string;

  @IsString()
  ivs: string;

  @IsString()
  evs: string;

  @IsString()
  id: string;

  @IsString()
  password: string;

  @IsString()
  party_tag: string;

  @IsString()
  sample_tag: string;

  @IsArray()
  moves: string[];

  @IsString()
  nature: string;
}
