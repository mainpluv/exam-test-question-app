import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from '../entities/answers.entity';
import { AnswerService } from '../services/answers.service';
import { AnswersController } from '../controllers/answers.controller';
import { Question } from 'src/entities/questions.entity';
import { AnswerRepository } from '../repositories/answers.repository';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  imports: [DatasourceModule, TypeOrmModule.forFeature([Answer, Question])],
  providers: [AnswerRepository, AnswerService],
  controllers: [AnswersController],
})
export class AnswerModule {}
