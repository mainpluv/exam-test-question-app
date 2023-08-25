import { EntityRepository, Repository } from 'typeorm';
import { Question } from 'src/entities/questions.entity';

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question> {
}
