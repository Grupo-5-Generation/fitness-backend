import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_treinos' })
export class Treino {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  tipo: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  exercicios: string;

  @IsNotEmpty()
  @Column({ nullable: false })
  repetioes: number;

  @IsNotEmpty()
  @Column({ nullable: false })
  series: number;
}
