import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Task } from "../tasks/tasks_entity";
import { User } from "../users/users_entity";
@Entity({ name: "comments" })
export class Comment {
  @PrimaryGeneratedColumn("uuid")
  comment_id!: string;

  @Column({ type: "text" })
  comment!: string;

  @OneToOne(() => User, (user) => user.user_id)
  @JoinColumn({ name: "user_id" })
  user_id!: string;

  @OneToOne(() => Task, (task) => task.task_id)
  @JoinColumn({ name: "task_id" })
  task_id!: string;

  @Column("text", { array: true, default: [] })
  supported_files!: string[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
