import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { QuestionService } from '../services/questions.service';
import { Question } from '../entities/questions.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('questions')
@ApiTags('Вопросы') 
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @ApiOperation({ summary: 'получение всех вопросов' }) 
  @Get()
  async getAllQuestions() { 
    const questions = await this.questionService.getAllQuestions();
    return questions;
  }

  @ApiOperation({ summary: 'Получение вопроса по id' }) 
  @Get(':test_id')
  async getQuestionsByTestId(@Param('test_id') test_id: number) {
    const questions = await this.questionService.getQuestionsByTestId(test_id);
    return questions;
  }

  @ApiOperation({ summary: 'Создание вопроса и ответа' }) 
  @Post()
  async addQuestionAndAnswer(
    @Body('test_id') test_id: number,
    @Body('question_text') question_text: string,
    @Body('answer_text') answer_text: string,
  ) {
    const question = await this.questionService.addQuestionAndAnswer(test_id, question_text, answer_text);
    return question;
  }

  @ApiOperation({ summary: 'Обновление вопроса' }) 
  @Patch(':question_id')
  async updateQuestion(
    @Param('question_id') question_id: number,
    @Body('question_text') question_text: string,
  ) {
    const question = await this.questionService.updateQuestion(question_id, question_text);
    return question;
  }

  @ApiOperation({ summary: 'Удаление вопроса и ответа' }) 
  @Delete(':question_id')
  async deleteQuestionAndAnswer(@Param('question_id') question_id: number) {
    await this.questionService.deleteQuestionAndAnswer(question_id);
    return null;
  }
  @Get('incomplete')
  findIncomplete() {
    this.questionService.findIncomplete();
  }

}
