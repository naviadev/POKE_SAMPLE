import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SampleEntity } from '../entity/sample.entity';
import { Sample } from 'src/Sample/domain/entity/sample';
import { SampleFactory } from 'src/Sample/domain/factory/sample.factory';

@Injectable()
export class SampleRepository {
  constructor(
    @InjectRepository(SampleEntity)
    private readonly sampleRepository: Repository<SampleEntity>,
    private readonly sampleFactory: SampleFactory,
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
    const { id, nick_name, password, pokedex, title, content, tags } = entity;
    return this.sampleFactory.create({
      id,
      nick_name,
      password,
      pokedex,
      title,
      content,
      tags,
    });
  }
  async findById(id: string): Promise<Sample | null> {
    const entity = await this.sampleRepository.findOne({ where: { id } });
    return entity ? this.toDomain(entity) : null;
  }

  async findAll(): Promise<Sample[] | null> {
    const entities = await this.sampleRepository.find();
    if (!entities) {
      return null;
    }
    return entities.map((entity) => this.toDomain(entity));
  }
}
