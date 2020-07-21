import { Entity, Column, BeforeInsert, ManyToMany, JoinTable } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Identifiable } from '../../../../shared/entities/identifiable.entitty';
import { UserRole } from '../../user-role/entities/user-role.entity';

@Entity('users')
export class User extends Identifiable {
  @Column('text', { name: 'username', unique: true, nullable: false })
  username: string;

  @Column('text', { select: false, nullable: false })
  password: string;

  @Column('text', { name: 'email', nullable: false })
  email: string;

  @Column('text', { name: 'region', nullable: true })
  region: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 255,
  })
  token: string;

  @ManyToMany(type => UserRole)
  @JoinTable({ name: 'roles' })
  roles: UserRole[];

  public static getBase64(username: string, password: string) {
    return Buffer.from(username + ':' + password).toString('base64');
  }

  @BeforeInsert()
  async createToken() {
    this.token = await User.getBase64(this.username, this.password);
  }

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 50);
  }
}
