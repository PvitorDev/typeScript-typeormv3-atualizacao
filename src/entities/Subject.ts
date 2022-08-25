import { Room } from "./Room";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("subjects")
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;

  @ManyToMany(() => Room, (room) => room.subjects)
  @JoinTable({
    name: "room_subject",
    joinColumn: {
      name: "room_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "subjects_id",
      referencedColumnName: "id",
    },
  })
  room: Room[];
}
