import { IQuery } from '@nestjs/cqrs';

export class GetAdvancedSearch implements IQuery {
  constructor(
    public readonly pokedex: string,
    public readonly sample_tag_id?: string,
    public readonly party_tag?: string,
    public readonly title?: string,
    public readonly item_id?: string,
    public readonly sample_index?: string,
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
      query['pokedex'],
      query['sample_tag_id'],
      query['party_tag'],
      query['title'],
      query['item_id'],
      query['sample_index'],
    );
  }
}
