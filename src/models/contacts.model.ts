import { Transform } from "class-transformer";

import { Entity, Column, CreateDateColumn, UpdateDateColumn, ObjectID, ObjectIdColumn } from "typeorm";

@Entity({ name: "contacts" })
export class Contacts {
  @ObjectIdColumn({ name: "_id", type: "varchar" })
  @Transform((id: any) => id.toHexString(), { toPlainOnly: true })
  _id?: ObjectID;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  indicative: string;

  @Column({ nullable: false })
  number: string;

  @Column({ nullable: false })
  documentId: string;

  @CreateDateColumn({ type: "timestamp", nullable: true })
  createdAt?: Date;

  @UpdateDateColumn({ type: "timestamp", nullable: true })
  updatedAt?: Date;
}
