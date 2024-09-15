import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SampleEntity } from '../entity/sample.entity';
import { Sample } from 'src/sample/domain/entity/sample';
import { SampleFactory } from 'src/sample/domain/factory/sample.factory';
import { SampleAdapter } from 'src/sample/application/adapter/sample.adapter';

@Injectable()
export class SampleRepository {
  constructor(
    @InjectRepository(SampleEntity)
    private readonly sampleRepository: Repository<SampleEntity>,
    private readonly sampleFactory: SampleFactory,
  ) {}

  async save(sample: Sample) {
    const entity = SampleAdapter.toEntity(sample);
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
