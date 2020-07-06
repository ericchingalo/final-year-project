import { Entity, Column } from 'typeorm';
import { Identifiable } from '../../../shared/entities/identifiable.entitty';

@Entity('permission')
export class Permission extends Identifiable {
  @Column('text', { name: 'permission', nullable: false, unique: true })
  permission: string;
}
