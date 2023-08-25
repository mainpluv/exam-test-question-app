import { Controller, Get, Param, Patch, Body, NotFoundException } from '@nestjs/common';
import { AnswerService } from '../services/answers.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('answers')
@ApiTags('Ответы') 
export class AnswersController {
  constructor(private readonly answersService: AnswerService) {}

  @ApiOperation({ summary: 'Обновление ответа' }) 
  @Patch(':answer_id')
  async updateAnswer(@Param('answer_id') answer_id: number, @Body('answer_text') answer_text: string) {
    const updatedAnswer = await this.answersService.updateAnswer(answer_id, answer_text);
    if (!updatedAnswer) {
      throw new NotFoundException('Ответы не найдены');
    }
    return updatedAnswer;
  }
  @ApiOperation({ summary: 'Получение ответов' }) 
  @Get('incomplete')
  findIncomplete() {
    this.answersService.findIncomplete();
  }

}
