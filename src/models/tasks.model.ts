import { Transform } from "class-transformer";

import { Entity, Column, CreateDateColumn, UpdateDateColumn, ObjectID, ObjectIdColumn } from "typeorm";

@Entity({ name: "tasks" })
export class Tasks {
  @ObjectIdColumn({ name: "_id", type: "varchar" })
  @Transform((id: any) => id.toHexString(), { toPlainOnly: true })
  _id?: ObjectID;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  scheduling: string;

  @Column({ nullable: false })
  active: boolean;

  @Column({ nullable: false })
  message: string;

  @CreateDateColumn({ type: "timestamp", nullable: true })
  createdAt?: Date;

  @UpdateDateColumn({ type: "timestamp", nullable: true })
  updatedAt?: Date;
}