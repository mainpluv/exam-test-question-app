import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from '../entities/tests.entity';
import { TestService } from '../services/tests.service';
import { TestController } from '../controllers/tests.controller';
import { Exam } from 'src/entities/exams.entity';
import { TestRepository } from '../repositories/tests.repository';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { Question } from 'src/entities/questions.entity';

@Module({
  imports: [DatasourceModule, TypeOrmModule.forFeature([Test, Exam, Question])],
  providers: [TestRepository, TestService],
  controllers: [TestController],
})
export class TestModule {}
