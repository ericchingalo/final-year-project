import {
  Entity,
  CreateDateColumn,
  BeforeInsert,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { SoilAnalysisBaseEntity } from '../../../../shared/entities/soil-analysis.entitty';
import { Device } from 'src/modules/soil-test/device/entities/device.entity';
import { ParameterResult } from './parameter-result.entity';

@Entity('soil_test_result')
export class Result extends SoilAnalysisBaseEntity {
  @CreateDateColumn({
    type: 'timestamp',
    name: 'created',
    default: () => 'LOCALTIMESTAMP',
  })
  created: Date;

  @ManyToOne(
    type => Device,
    device => device.results,
  )
  device: Device;

  @OneToMany(
    type => ParameterResult,
    parameter => parameter.result,
  )
  parameter: ParameterResult[];

  @BeforeInsert()
  insertDate() {
    this.created = new Date();
  }
}
