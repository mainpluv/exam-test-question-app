import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany } from 'typeorm';
import { Exam } from 'src/entities/exams.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Question } from './questions.entity';

@Entity({ name: 'tests' })
export class Test {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  test_id: number;

  @ManyToOne(() => Exam, exam => exam.exam_id)
  exam: Exam;

  @Column()
  test_text: string;

  @OneToMany(() => Question, question => question.question_id)
  questions: Question[];
}
