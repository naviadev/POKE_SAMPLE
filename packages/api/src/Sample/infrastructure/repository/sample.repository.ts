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

  private toEntity(sample: Sample): SampleEntity {
    const sampleEntity = new SampleEntity();
    const properties = Object.getOwnPropertyNames(sample);
    properties.forEach((property) => {
      const key = Reflect.getMetadata(property, sample);
      if (key) {
        sampleEntity[key] = sample[property].getValue();
      }
    });
    return sampleEntity;
  }

  private toDomain(entity: SampleEntity): Sample {
    return this.sampleFactory.create({
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
    });
  }
}
