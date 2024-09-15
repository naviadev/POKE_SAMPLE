import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateSampleCommand } from '../createSample.command';
import { SampleFactory } from 'src/sample/domain/factory/sample.factory';
import { SampleRepository } from 'src/sample/infrastructure/repository/sample.repository';
import { DataSource, QueryRunner } from 'typeorm';
import { ServiceMessage } from 'src/sample/enum/serviceMessage.enum';
import { InjectDataSource } from '@nestjs/typeorm';
import { CreateSampleCommandAdapter } from '../../adapter/sampleCommand.adapter';

/**
 * * Class : CreateSampleCommandHandler
 * 작성자 : @naviadev / 2024-08-17
 * @class CreateSampleCommandHandler
 * @param private readonly sampleFactory: SampleFactory, private readonly sampleRepository: SampleRepository
 * @description : Sample 상태 변경 요청을 처리하며, 비즈니스 로직을 실행하는 역할을 수행한다.
 */
@CommandHandler(CreateSampleCommand)
export class CreateSampleCommandHandler
  implements ICommandHandler<CreateSampleCommand>
{
  private readonly queryRunner: QueryRunner;
  constructor(
    private readonly sampleFactory: SampleFactory, // 도메인 생성을 위한 팩토리 .
    private readonly sampleRepository: SampleRepository, // 도메인 저장을 위한 레포지토리 .
    @InjectDataSource() private readonly dataSource: DataSource, // 트랜잭션 관리 모듈 주입.
  ) {}
  async execute(command: CreateSampleCommand): Promise<any> {
    const queryRunner = this.dataSource.createQueryRunner(); // QueryRunner 생성
    const options = CreateSampleCommandAdapter.toOptions(command);

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Factory 객체를 통해 Sample 도메인 인스턴스.
      const sample = this.sampleFactory.create(options);
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
