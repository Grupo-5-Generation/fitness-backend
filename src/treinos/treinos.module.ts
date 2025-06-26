import { TypeOrmModule } from '@nestjs/typeorm';
import Module from 'module';
import { TreinoController } from './controllers/treinos.controller';
import { Treino } from './entities/treinos.entity';
import { TreinoService } from './services/treinos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Treino])],
  providers: [TreinoService],
  controllers: [TreinoController],
  exports: [],
})
export class TreinoModule {}
