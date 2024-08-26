import { Controller, Param, Get, HttpException } from '@nestjs/common';
import { GetAbilitiesHandler } from '../application/query/handler/getAbilities.handler';
import { GetAbilities } from '../application/query/getAbilities.query';

@Controller('/abilities')
export class AbilitiesController {
  constructor(private readonly abilitiesHandler: GetAbilitiesHandler) {}

  @Get('/:id')
  async getAbilities(@Param('id') pokedex: number) {
    console.log(pokedex);
    try {
      const query = new GetAbilities(pokedex);
      const data = await this.abilitiesHandler.execute(query);
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      return HttpException;
    }
  }
}
