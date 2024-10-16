import { IsString, IsInt, IsNotEmpty, Length, IsArray } from 'class-validator';

export class SampleCreateDTO {
  @IsInt()
  @IsNotEmpty()
  pokedex: number;

  @IsString()
  @IsNotEmpty()
  @Length(1, 10)
  abilities: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsInt()
  @IsNotEmpty()
  sample_tag_id: number;

  @IsInt()
  @IsNotEmpty()
  item_id: number;

  @IsInt()
  @IsNotEmpty()
  nature_id: number;

  @IsInt()
  @IsNotEmpty()
  tera: number;

  @IsString()
  @IsNotEmpty()
  ivs: string;

  @IsString()
  @IsNotEmpty()
  evs: string;

  @IsArray()
  @IsNotEmpty()
  moves_id: number[];
}
