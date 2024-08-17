import { IsArray, IsNumber, IsString } from 'class-validator';
export class CreateSampleDTO {
  @IsString()
  nick_name: string;

  @IsString()
  password: string;

  @IsNumber()
  pokedex: number;

  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsArray()
  tags: string[];
}
