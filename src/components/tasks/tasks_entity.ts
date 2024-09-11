import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Project } from "../projects/projects_entity";

export enum Status {
  NotStarted = "Not Started",
  InProgress = "In Progress",
  Completed = "Completed",
}

export enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

@Entity({ name: "tasks" })
export class Task {
  @PrimaryGeneratedColumn("uuid")
  task_id!: string;

  @Column({ length: 30, nullable: false, unique: true })
  name!: string;

  @Column({ length: 500 })
  description!: string;

  @Column()
  @ManyToOne(() => Project, (project) => project.project_id)
  @JoinColumn({ name: "project_id" })
  project_id!: string;

  @Column()
  estimated_start_time!: Date;

  @Column()
  estimated_end_time!: Date;

  @Column()
  actual_start_time!: Date;

  @Column()
  actual_end_time!: Date;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.NotStarted,
  })
  status!: Status;

  @Column({
    type: "enum",
    enum: Priority,
    default: Priority.Low,
  })
  priority!: Priority;

  @Column("text", { array: true, default: [] })
  supported_files!: string[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
