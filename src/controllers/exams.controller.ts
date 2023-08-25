import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ExamService } from '../services/exams.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('exams')
@ApiTags('Экзамены') 
export class ExamsController {
  constructor(private readonly examsService: ExamService) {}

  @ApiOperation({ summary: 'Получение экзаменов' }) 
  @Get()
  async getExamsWithTestCount() {
    return this.examsService.getExamsWithTestCount();
  }

  @ApiOperation({ summary: 'Получение экзамена по id' }) 
  @Get(':exam_id')
  async getExamById(@Param('exam_id') exam_id: number) {
    const exam = await this.examsService.getExamById(exam_id);
    if (!exam) {
      throw new NotFoundException('Экзамен не найден');
    }
    return exam;
  }
}
