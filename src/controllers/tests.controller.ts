import { Controller, Get, Param } from '@nestjs/common';
import { TestService } from '../services/tests.service';
import { Test } from '../entities/tests.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('tests')
@ApiTags('Тесты') 
export class TestController {
  constructor(private readonly testService: TestService) {}

  @ApiOperation({ summary: 'Получение теста' })
  @Get('exam/:exam_id')
  async getTestsByExamId(@Param('exam_id') exam_id: number): Promise<Test[]> {
    return this.testService.getTestsByExamId(exam_id);
  }

  @ApiOperation({ summary: 'Получениех всех тестов' }) 
  @Get('all-with-question-count')
  async getAllTestsWithQuestionCount(): Promise<Test[]> {
    return this.testService.getAllTestsWithQuestionCount();
  }
}
