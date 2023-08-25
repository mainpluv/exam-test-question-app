import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Answer } from '../entities/answers.entity';
import { AnswerRepository } from '../repositories/answers.repository';

@Injectable()
export class AnswerService {
  findIncomplete: any;
  constructor(
    @InjectRepository(AnswerRepository)
    private answerRepository: AnswerRepository,
  ) {}

  async updateAnswer(answer_id: number, answer_text: string): Promise<Answer> {
    return this.answerRepository.query('SELECT * FROM update_answer($1, $2)', [answer_id, answer_text]);

  }
}
