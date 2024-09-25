import { IQuery } from '@nestjs/cqrs';

export class GetAdvancedSearch implements IQuery {
  constructor(
    public readonly pokemon: string,
    public readonly sample_tag?: string,
    public readonly party_tag?: string,
    public readonly title?: string,
    public readonly item?: string,
    public readonly index?: string,
  ) {}

  static create(queryString: string) {
    return this.convertQuery(queryString);
  }

  private static convertQuery(queryString: string) {
    const queryArray = queryString['0'].split('/'); // ex ) "pokemon/25/sample_tag/tag_value"

    const query: { [key: string]: string } = {};

    for (let i = 0; i < queryArray.length; i += 2) {
      query[queryArray[i]] = queryArray[i + 1];
    }

    return new GetAdvancedSearch(
      query['pokemon'],
      query['sample_tag'],
      query['party_tag'],
      query['title'],
      query['item'],
      query['index'],
    );
  }
}
