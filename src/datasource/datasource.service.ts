import { Injectable } from '@nestjs/common';
import { Answer } from 'src/entities/answers.entity';
import { Exam } from 'src/entities/exams.entity';
import { Question } from 'src/entities/questions.entity';
import { Test } from 'src/entities/tests.entity';


@Injectable()
export class DatasourceService {
  private exams: Exam[] = [];
  private tests: Test[] = [];
  private questions: Question[] = [];
  private answers: Answer[] = [];

  getExams(): Exam[] {
    return this.exams;
  }
  getTests(): Test[] {
    return this.tests;
  }
  getQuestions(): Question[] {
    return this.questions;
  }
  getAnswers(): Answer[] {
    return this.answers;
  }
}