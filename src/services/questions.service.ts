import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from '../entities/questions.entity';
import { QuestionRepository } from '../repositories/questions.repository';

@Injectable()
export class QuestionService {
  findIncomplete: any;
  constructor(
    @InjectRepository(QuestionRepository)
    private questionRepository: QuestionRepository,
  ) {}

  async getQuestionsByTestId(test_id: number): Promise<Question[]> {
    return this.questionRepository.query('SELECT * FROM get_questions_by_test_id($1)', [test_id]);
  }

  async addQuestionAndAnswer(test_id: number, questionText: string, answerText: string): Promise<Question> {
    return this.questionRepository.query('SELECT * FROM add_question_and_answer($1, $2, $3)', [test_id, questionText, answerText]);
  }

  async updateQuestion(question_id: number, questionText: string): Promise<Question> {
    return this.questionRepository.query('SELECT * FROM update_question($1, $2)', [question_id, questionText]);
  }

  async deleteQuestionAndAnswer(question_id: number): Promise<void> {
    await this.questionRepository.query('SELECT * FROM delete_question_and_answer($1)', [question_id]);
  }

  async getAllQuestions(): Promise<Question[]> {
    
    return this.questionRepository.query('SELECT * FROM show_questions');
  }
}
