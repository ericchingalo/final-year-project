import { Entity, CreateDateColumn, BeforeInsert, ManyToOne } from 'typeorm';
import { SoilAnalysisBaseEntity } from '../../../shared/entities/soil-analysis.entitty';
import { Device } from 'src/modules/device/entities/device.entity';

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

  @BeforeInsert()
  insertDate() {
    this.created = new Date();
  }
}
