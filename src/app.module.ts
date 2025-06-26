import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Treino } from './treinos/entities/treino.entity';
import { TreinoModule } from './treinos/treino.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_fitness',
      entities: [Treino],
      synchronize: true,
    }),
    TreinoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
