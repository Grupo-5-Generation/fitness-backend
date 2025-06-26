import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Treino } from '../entities/treinos.entity';
import { create } from 'domain';
import { async } from 'rxjs';

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
    const Treino = await this.treinoRepository.findOne({
      where: {
        id,
      },
    });
}

    if (!treino)
      throw new HttpException('Treino não encontrado!', HttpStatus.NOT_FOUND);

    return Treino;
  }

  async findAllByTipo(tipo: string): Promise<Treino[]> {
    return await this.treinoRepository.find({
      where: {
        tipo: ILike(`%${tipo}%`),
      },
    });
  }

  async create(treino: Treino): Promise<Treino> {
    return await this.treinoRepository.save(Treino);
  }

  async update(treino: Treino): Promise<Treino> {
    await this.findById(Treino.id);

    return await this.treinoRepository.save(Treino);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.treinoRepository.delete(id);
  }
}
