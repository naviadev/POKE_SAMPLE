import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SampleEntity } from '../entity/sample.entity';
import { Sample } from 'src/Sample/domain/entity/sample';
import { SampleId } from 'src/Sample/domain/value-object/sampleId.vo';
import { Nickname } from 'src/Sample/domain/value-object/nickname.vo';
import { Password } from 'src/Sample/domain/value-object/password.vo';
import { Title } from 'src/Sample/domain/value-object/title.vo';
import { Content } from 'src/Sample/domain/value-object/content.vo';
import { Tag } from 'src/Sample/domain/value-object/tag.vo';
import { Pokedex } from 'src/Sample/domain/value-object/pokedex.vo';

@Injectable()
export class SampleRepository {
  constructor(
    @InjectRepository(SampleEntity)
    private sampleRepository: Repository<SampleEntity>,
  ) {}
  async save(sample: Sample) {
    const entity = this.toEntity(sample);
    await this.sampleRepository.save(entity);
  }
  private toEntity(sample: Sample): SampleEntity {
    const sampleEntity = new SampleEntity();
    sampleEntity.id = sample.getId().getValue();
    sampleEntity.nick_name = sample.getNickname().getValue();
    sampleEntity.password = sample.getPassword().getValue();
    sampleEntity.title = sample.getTitle().getValue();
    sampleEntity.content = sample.getContent().getValue();
    sampleEntity.tags = sample.getTags().getValues();
    return sampleEntity;
  }
  private toDomain(entity: SampleEntity): Sample {
    return new Sample(
      new SampleId(entity.id),
      new Nickname(entity.nick_name),
      new Password(entity.password),
      Pokedex.create(entity.pokedex),
      new Title(entity.title),
      Content.create(entity.content),
      Tag.create(entity.tags),
    );
  }
  async findById(id: string): Promise<Sample | null> {
    const entity = await this.sampleRepository.findOne({ where: { id } });
    return entity ? this.toDomain(entity) : null;
  }

  async findAll(): Promise<Sample | null> {
    const entity = await this.sampleRepository.find();
    return null;
    // return entity ? this.toDomain(entity) : null;
  }
}
