import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreinoController } from './controllers/treino.controller';
import { Treino } from './entities/treino.entity';
import { TreinoService } from './services/treino.service';

@Module({
  imports: [TypeOrmModule.forFeature([Treino])],
  providers: [TreinoService],
  controllers: [TreinoController],
  exports: [],
})
export class TreinoModule {}
