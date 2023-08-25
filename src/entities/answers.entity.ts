import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Question } from 'src/entities/questions.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'answers' })
export class Answer {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  answer_id: number;

  @ManyToOne(() => Question, question => question.question_id)
  question: Question;

  @Column()
  answer_text: string;
}