import { SampleRepository } from 'src/sample/infrastructure/repository/sample.repository';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetSampleByIndexScrollQuery } from '../query/getSampleByIndexScroll.query';

@QueryHandler(GetSampleByIndexScrollQuery)
export class GetSampleByIndexScrollHandler implements IQueryHandler {
  constructor(private readonly repository: SampleRepository) {}
  async execute(query: GetSampleByIndexScrollQuery) {
    try {
      return this.repository.findByIndexScroll(query.index, query.number);
    } catch (error) {
      console.error(`GetSampleByIndexHandler Error : ${error}`);
    }
  }
}
