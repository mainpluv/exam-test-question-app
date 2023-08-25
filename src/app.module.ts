import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamModule } from './modules/exams.module';
import { QuestionModule } from './modules/questions.module';
import { TestModule } from './modules/tests.module';
import { AnswerModule } from './modules/answers.module';
import { DatasourceModule } from './datasource/datasource.module';

@Module({
  imports: [
    ExamModule,
    TestModule,
    QuestionModule,
    AnswerModule,
    DatasourceModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433, 
      username: '****',
      password: '******',
      database: 'SinitsynDM_ITKN',
      schema: "dbo",
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      logging: 'all',
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
    }),
  ],
  controllers: [],
  providers: [], 
  
}
)

export class AppModule {}
