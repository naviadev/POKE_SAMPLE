import { ICommandHandler } from '@nestjs/cqrs';
import { CreateSampleCommand } from '../create_sample.command';

import { SampleFactory } from 'src/Sample/domain/factory/sample.factory';
import { SampleRepository } from 'src/Sample/infrastructure/repository/sample.repository';
import { Connection } from 'typeorm';
import { ServiceMessage } from 'src/Sample/enum/serviceMessage.enum';

/**
 * * Class : CreateSampleCommandHandler
 * 작성자 : @naviadev / 2024-08-17
 * @class CreateSampleCommandHandler
 * @param private readonly sampleFactory: SampleFactory, private readonly sampleRepository: SampleRepository
 * @description : Sample 상태 변경 요청을 처리하며, 비즈니스 로직을 실행하는 역할을 수행한다.
 */
export class CreateSampleCommandHandler
  implements ICommandHandler<CreateSampleCommand>
{
  constructor(
    private readonly sampleFactory: SampleFactory, // 도메인 생성을 위한 팩토리 .
    private readonly sampleRepository: SampleRepository, // 도메인 저장을 위한 레포지토리 .
    private readonly connection: Connection, // 트랜잭션 관리 모듈 주입.
  ) {}
  async execute(command: CreateSampleCommand): Promise<any> {
    const { nick_name, password, pokedex, title, content, tags } = command; // Comand 구조 분해 .
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction(); //트랜잭션 시작.
    try {
      // Factory 객체를 통해 Sample 도메인 인스턴스.
      const sample = this.sampleFactory.create({
        nick_name,
        password,
        pokedex,
        title,
        content,
        tags,
      });
      await this.sampleRepository.save(sample); // 커스텀 Repository를 통해 Database 쓰기 작업 수행
      await queryRunner.commitTransaction(); // 트랜잭션 커밋.
    } catch (error) {
      console.error(ServiceMessage.__COMMAND_EXEC_FAILED, error);
      throw error;
    } finally {
      await queryRunner.release(); // 트랜잭션 해제
    }
  }
}
