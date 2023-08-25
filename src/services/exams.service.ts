import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exam } from '../entities/exams.entity';
import { ExamRepository } from '../repositories/exams.repository'; // Проверьте правильность пути импорта


@Injectable()
export class ExamService {
  constructor(
    @InjectRepository(ExamRepository)
    private examRepository: ExamRepository,
  ) {}

  async getExamsWithTestCount(): Promise<Exam[]> {
    return this.examRepository.query('SELECT * FROM exams_with_test_count');
  }

  async getExamById(exam_id: number): Promise<Exam> {
    return this.examRepository.query('SELECT * FROM get_exam_by_id', [exam_id]);
  }
}
