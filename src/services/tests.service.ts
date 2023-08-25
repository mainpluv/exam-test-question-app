import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Test } from '../entities/tests.entity';
import { TestRepository } from '../repositories/tests.repository';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(TestRepository)
    private readonly testRepository: TestRepository,
  ) {}

  async getTestsByExamId(exam_id: number): Promise<Test[]> {
    return this.testRepository.query('SELECT * FROM get_tests_by_exam_id($1)', [exam_id]);
  }

  async getAllTestsWithQuestionCount(): Promise<Test[]> {
    return this.testRepository.query('SELECT * FROM tests_with_question_count');
  }
}
