import { Entity, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Identifiable } from '../../../shared/entities/identifiable.entitty';

@Entity('device')
export class Device extends Identifiable {
  @Column('text', { select: false, nullable: false })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 50);
  }
}
