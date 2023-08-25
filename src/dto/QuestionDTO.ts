import { ApiProperty } from "@nestjs/swagger";

export class CreateQuestionDto {

  @ApiProperty({
    example: [1, 2],
    description: 'Список идентификаторов вопросов',
  })
  question_id: number[];
  @ApiProperty({ example: 'Сколько существует различных символов', description: 'Вопрос' })
  question_text: string;
}
