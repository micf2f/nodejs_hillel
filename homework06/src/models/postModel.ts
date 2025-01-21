import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./userModel";

@Entity("posts")
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: "authorId" })
    authorId: User;

    @Column({ type: "text" })
    title: string;

    @Column({ type: "text" })
    content: string;

    @Column({
        type: "enum",
        enum: ["draft", "published", "archived"],
        default: "draft"
    })
    status: "draft" | "published" | "archived";

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updatedAt: Date;
}
