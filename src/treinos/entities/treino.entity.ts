import { IsInt, IsNotEmpty, Min } from 'class-validator';
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
  @IsInt()
  @Min(1)
  @Column({ type: 'int', default: 0, nullable: false })
  repeticoes: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Column({ type: 'int', default: 0, nullable: false })
  series: number;
}
