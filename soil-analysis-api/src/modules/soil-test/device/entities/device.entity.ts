import {
  Entity,
  Column,
  BeforeInsert,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Identifiable } from '../../../../shared/entities/identifiable.entitty';
import { User } from '../../../system/user/entities/user.entity';
import { Result } from 'src/modules/soil-test/result/enntities/result.entity';

@Entity('device')
export class Device extends Identifiable {
  @Column('text', { select: false, nullable: false })
  password: string;

  @OneToOne(type => User)
  @JoinColumn()
  user: User;

  @OneToMany(
    type => Result,
    result => result.device,
  )
  results: Result[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 50);
  }
}
