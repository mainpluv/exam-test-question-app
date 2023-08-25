import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exam } from '../entities/exams.entity';
import { ExamService } from '../services/exams.service';
import { ExamsController } from '../controllers/exams.controller';
import { ExamRepository } from '../repositories/exams.repository';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { Test } from 'src/entities/tests.entity';

@Module({
  imports: [ DatasourceModule, TypeOrmModule.forFeature([Exam, Test])],
  providers: [ExamRepository, ExamService],
  controllers: [ExamsController],
})
export class ExamModule {}
