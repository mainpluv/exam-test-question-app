import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany } from 'typeorm';
import { Test } from 'src/entities/tests.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Answer } from './answers.entity';

@Entity({ name: 'questions' })
export class Question {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  question_id: number;

  @ManyToOne(() => Test, test => test.test_id)
  test_id: Test;

  @Column()
  question_text: string;

  @OneToMany(() => Answer, answer => answer.question)
  answers: Answer[];
}
