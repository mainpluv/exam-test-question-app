import { EntityRepository, Repository } from 'typeorm';
import { Test } from '../entities/tests.entity';

@EntityRepository(Test)
export class TestRepository extends Repository<Test> {

}
