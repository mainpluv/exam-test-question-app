import { EntityRepository, Repository } from 'typeorm';
import { Exam } from 'src/entities/exams.entity';

@EntityRepository(Exam)
export class ExamRepository extends Repository<Exam> {}
