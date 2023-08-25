import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from '../entities/questions.entity';
import { QuestionService } from '../services/questions.service';
import { QuestionController } from '../controllers/questions.controller';
import { Test } from 'src/entities/tests.entity';
import { QuestionRepository } from '../repositories/questions.repository';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { Answer } from 'src/entities/answers.entity';

@Module({
  imports: [DatasourceModule, TypeOrmModule.forFeature([Question, Test, Answer])],
  providers: [QuestionRepository, QuestionService],
  controllers: [QuestionController],
})
export class QuestionModule {}
