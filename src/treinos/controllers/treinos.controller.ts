import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Body, Put, Delete } from "@nestjs/common";
import { Treino } from "../entities/treinos.entity";

@Controller('/postagens')
export class TreinoController {
  constructor(private readonly TreinoService: TreinoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Treino[]> {
    return this.TreinoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Treino> {
    return this.TreinoService.findById(id);
  }
  @Get('/titulo/:titulo')
  @HttpCode(HttpStatus.OK)
  findAllByTitulo(@Param('titulo') titulo: string): Promise<Treino[]> {
    return this.TreinoService.findAllByTitulo(titulo);
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
