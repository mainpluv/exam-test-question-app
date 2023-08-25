import { ApiProperty } from "@nestjs/swagger";

export class CreateAnswerDto {
  @ApiProperty({
    example: [1, 2],
    description: 'Список идентификаторов вопросов',
  })
  question_id: number[];
  @ApiProperty({ example: '1231', description: 'Ответ' })
  answer_text: string;
}
