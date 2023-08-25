import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Test } from 'src/entities/tests.entity';
import { ApiProperty } from '@nestjs/swagger';


@Entity({ name: 'exams' })

export class Exam {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  exam_id: number;

  @Column()
  exam_name: string;

  @Column()
  exam_description: string;

  @OneToMany(() => Test, test => test.exam)
  tests: Test[];
}

