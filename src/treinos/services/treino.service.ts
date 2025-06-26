import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Treino } from './../entities/treino.entity';

@Injectable()
export class TreinoService {
  constructor(
    @InjectRepository(Treino)
    private treinoRepository: Repository<Treino>,
  ) {}

  async findAll(): Promise<Treino[]> {
    return await this.treinoRepository.find({});
  }

  async findById(id: number): Promise<Treino> {
    const treino = await this.treinoRepository.findOne({
      where: {
        id,
      },
    });
    if (!treino)
      throw new HttpException('Treino não encontrado!', HttpStatus.NOT_FOUND);
    return treino;
  }

  async findAllByTipo(tipo: string): Promise<Treino[]> {
    return await this.treinoRepository.find({
      where: {
        tipo: ILike(`%${tipo}%`),
      },
    });
  }

  async create(treino: Treino): Promise<Treino> {
    return await this.treinoRepository.save(treino);
  }

  async update(treino: Treino): Promise<Treino> {
    await this.findById(treino.id);

    return await this.treinoRepository.save(treino);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.treinoRepository.delete(id);
  }
}
