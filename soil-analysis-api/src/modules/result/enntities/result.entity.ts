import { Entity, CreateDateColumn, BeforeInsert } from 'typeorm';
import { SoilAnalysisBaseEntity } from '../../../shared/entities/soil-analysis.entitty';

@Entity('soil_test_result')
export class Result extends SoilAnalysisBaseEntity {
  @CreateDateColumn({
    type: 'timestamp',
    name: 'created',
    default: () => 'LOCALTIMESTAMP',
  })
  created: Date;

  @BeforeInsert()
  insertDate() {
    this.created = new Date();
  }
}
