import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Role } from "../roles/roles_entity";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  user_id!: string;

  @Column({ length: 50, nullable: true })
  fullname!: string;

  @Column({ length: 30, nullable: false, unique: true })
  username!: string;

  @Column({ length: 60, nullable: false, unique: true })
  email!: string;

  @Column({ nullable: false })
  password!: string;

  @Column({ nullable: false })
  @ManyToOne(() => Role, (role) => role.role_id)
  @JoinColumn({ name: "role_id" })
  role_id!: Role["role_id"];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
