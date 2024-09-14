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

  async findById(index: number): Promise<Sample | null> {
    const entity = await this.sampleRepository.findOne({ where: { index } });
    return entity ? this.toDomain(entity) : null;
  }

  async findAll(): Promise<Sample[] | null> {
    const entities = await this.sampleRepository.find();
    if (!entities) {
      return null;
    }
    return entities.map((entity) => this.toDomain(entity));
  }

  async findLatestSample(): Promise<Sample[] | null> {
    const latestSamples = await this.sampleRepository.find({
      order: {
        createdAt: 'DESC',
      },
      take: 20, // LIMIT 20
    });
    if (!latestSamples) {
      return null;
    }
    console.log(latestSamples);
    return latestSamples.map((entity) => this.toDomain(entity));
  }

  private toEntity(sample: Sample): SampleEntity {
    const sampleEntity = new SampleEntity();
    sampleEntity.pokedex = sample.getPokedex().getValue();
    sampleEntity.id = sample.getId().getValue();
    sampleEntity.title = sample.getTitle().getValue();
    sampleEntity.ability = sample.getAbility().getValue();
    sampleEntity.item = sample.getItem().getValue();
    sampleEntity.content = sample.getContent().getValue();
    sampleEntity.tera = sample.getTera().getValue();
    sampleEntity.ivs = sample.getIVs().getValue();
    sampleEntity.evs = sample.getEVs().getValue();
    sampleEntity.password = sample.getPassword().getValue();
    sampleEntity.party_tag = sample.getPartyTag().getValue();
    sampleEntity.sample_tag = sample.getSampleTag().getValue();
    sampleEntity.moves = sample.getMoves().getValue();
    sampleEntity.nature = sample.getNature().getValue();

    return sampleEntity;
  }

  private toDomain(entity: SampleEntity): Sample {
    return this.sampleFactory.create({
      index: entity.index,
      pokedex: entity.pokedex,
      title: entity.title,
      ability: entity.ability,
      id: entity.id,
      content: entity.content,
      item: entity.item,
      ivs: entity.ivs,
      evs: entity.evs,
      password: entity.password,
      tera: entity.tera,
      party_tag: entity.party_tag,
      sample_tag: entity.sample_tag,
      moves: entity.moves,
      nature: entity.nature,
    });
  }
}
