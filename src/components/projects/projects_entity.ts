import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "projects" })
export class Project {
  @PrimaryGeneratedColumn("uuid")
  project_id!: string;

  @Column({ length: 30, nullable: false, unique: true })
  name!: string;

  @Column({ length: 500 })
  description!: string;

  @Column("uuid", { array: true, default: [] })
  user_ids!: string[];

  @Column()
  start_time!: Date;

  @Column()
  end_time!: Date;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
