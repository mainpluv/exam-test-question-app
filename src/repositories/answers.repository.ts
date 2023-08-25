import { EntityRepository, Repository } from 'typeorm';
import { Answer } from '../entities/answers.entity';

@EntityRepository(Answer)
export class AnswerRepository extends Repository<Answer> {
}
