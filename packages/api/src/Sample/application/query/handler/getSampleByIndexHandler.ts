import { SampleRepository } from 'src/sample/infrastructure/repository/sample.repository';
import { GetSampleByIndexQuery } from '../query/getSampleByIndex.query';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetSampleByIndexQuery)
export class GetSampleByIndexHandler implements IQueryHandler {
  constructor(private readonly repository: SampleRepository) {}

  async execute(query: GetSampleByIndexQuery) {
    try {
      const sampleData = await this.repository.findById(query.index);

      return sampleData;
    } catch (error) {
      console.error(`GetSampleByIndexHandler Error : ${error}`);
    }
  }
}
