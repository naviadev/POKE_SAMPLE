import { SampleRepository } from 'src/sample/infrastructure/repository/sample.repository';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetSampleByPokedex } from '../query/getSampleByPokedex.query';

@QueryHandler(GetSampleByPokedex)
export class GetSampleByPokedexHandler implements IQueryHandler {
  constructor(private readonly repository: SampleRepository) {}

  async execute(query: GetSampleByPokedex) {
    try {
      const sampleData = await this.repository.findByPokedex(
        query.pokedex,
        query.number,
      );

      return sampleData;
    } catch (error) {
      console.error(`GetSampleByIndexHandler Error : ${error}`);
    }
  }
}
