import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SampleEntity } from '../entity/sample.entity';
import { Sample } from 'src/sample/domain/entity/sample';
import { SampleFactory } from 'src/sample/domain/factory/sample.factory';

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
    sampleEntity.pokedex = sample.getPokedex().getValue();
    sampleEntity.content = sample.getContent().getValue();
    sampleEntity.ability = sample.getAbility().getValue();
    sampleEntity.evs = sample.getEVs().getValue();
    sampleEntity.ivs = sample.getIVs().getValue();
    sampleEntity.id = sample.getId().getValue();
    sampleEntity.password = sample.getPassword().getValue();
    sampleEntity.tera = sample.getTera().getValue();
    sampleEntity.item = sample.getItem().getValue();
    sampleEntity.title = sample.getTitle().getValue();
    sampleEntity.party_tag = sample.getPartyTag().getValue();
    sampleEntity.sample_tag = sample.getSampleTag().getValue();
    return sampleEntity;
  }
  private toDomain(entity: SampleEntity): Sample {
    const {
      pokedex,
      title,
      ability,
      id,
      content,
      item,
      ivs,
      evs,
      password,
      tera,
      party_tag,
      sample_tag,
    } = entity;
    return this.sampleFactory.create({
      pokedex,
      title,
      ability,
      id,
      content,
      item,
      ivs,
      evs,
      password,
      tera,
      party_tag,
      sample_tag,
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
