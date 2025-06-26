import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Treino } from '../entities/treino.entity';
import { TreinoService } from './../services/treino.service';

@Controller('/postagens')
export class TreinoController {
  constructor(private readonly TreinoService: TreinoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Treino[]> {
    return this.TreinoService.findAll();
  }

  /*
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Treino> {
    return this.TreinoService.findById();
  }*/

  @Get('/tipo/:tipo')
  @HttpCode(HttpStatus.OK)
  findAllByTipo(@Param('tipo') tipo: string): Promise<Treino[]> {
    return this.TreinoService.findAllByTipo(tipo);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() Treino: Treino): Promise<Treino> {
    return this.TreinoService.create(Treino);
  }
  @Put()
  @HttpCode(HttpStatus.CREATED)
  update(@Body() Treino: Treino): Promise<Treino> {
    return this.TreinoService.create(Treino);
  }
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.TreinoService.delete(id);
  }
}
