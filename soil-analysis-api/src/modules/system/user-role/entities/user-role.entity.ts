import { Entity, Column } from 'typeorm';
import { Identifiable } from '../../../../shared/entities/identifiable.entitty';

@Entity('user_role')
export class UserRole extends Identifiable {
  @Column('varchar', { length: 200, unique: true, name: 'role_name' })
  name: string;
}
