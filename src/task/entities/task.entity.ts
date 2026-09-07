import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  isCompleted: boolean;

  @Column()
  isFavorite: boolean;

  @Column({ type: 'text', nullable: true })
  remindAt: string | null;
}
