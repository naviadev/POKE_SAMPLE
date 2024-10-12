// import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
// import { GetAdvancedSearch } from '../query/getAdvancedSearch.query';
// import { SampleRepository } from 'src/sample/infrastructure/repository/sample.repository';

// @QueryHandler(GetAdvancedSearch)
// export class GetAdvancedSearchHandler
//   implements IQueryHandler<GetAdvancedSearch>
// {
//   constructor(private readonly sampleRepository: SampleRepository) {}

//   async execute(query: GetAdvancedSearch): Promise<any> {
//     const filteredData = {};
//     //Query 객체를 순회하며, undefined를 제외하여 사용자가 요청한 데이터만을 추린다.
//     for (const key in query) {
//       if (query[key] !== undefined) {
//         filteredData[key] = query[key];
//       }
//     }
//     console.log(filteredData);
//     try {
//       const data =
//         await this.sampleRepository.findAdvancedSearchData(filteredData);
//       return data;
//     } catch (error) {
//       // 에러 로깅 및 처리를 여기에서 수행
//       console.error('Error creating sample:', error);
//       throw new Error('Sample creation failed');
//     }
//   }
// }
