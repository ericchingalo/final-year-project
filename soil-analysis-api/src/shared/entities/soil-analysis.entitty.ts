import { PrimaryGeneratedColumn } from 'typeorm';

export class SoilAnalysisBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
