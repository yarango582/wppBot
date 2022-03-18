import { Transform } from "class-transformer";

import { Entity, Column, CreateDateColumn, UpdateDateColumn, ObjectID, ObjectIdColumn } from "typeorm";

@Entity({ name: "mailman" })
export class MailMan {
    @ObjectIdColumn({ name: "_id", type: "varchar" })
    @Transform((id: any) => id.toHexString(), { toPlainOnly: true })
    _id?: ObjectID;

    @Column({ nullable: false })
    nameTask: string;

    @Column({ nullable: false })
    documentIdContact: string;

    @Column({ nullable: false })
    active: boolean;

    @CreateDateColumn({ type: "timestamp", nullable: true })
    createdAt?: Date;

    @UpdateDateColumn({ type: "timestamp", nullable: true })
    updatedAt?: Date;
}