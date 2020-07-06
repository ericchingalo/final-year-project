import { Entity, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Identifiable } from '../../../../shared/entities/identifiable.entitty';

@Entity('user')
export class User extends Identifiable {
  @Column('text', { name: 'username', unique: true, nullable: false })
  username: string;

  @Column('text', { select: false, nullable: false })
  password: string;

  @Column('text', { name: 'email', nullable: false })
  email: string;

  @Column('text', { name: 'region', nullable: true })
  region: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 50);
  }
}
