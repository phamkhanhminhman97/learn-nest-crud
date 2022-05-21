import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(Person)
        private readonly personRepository: Repository<Person | any>,
        private readonly connection: Connection,
    ) { }
    private users: any = [{ id: 0, name: 'Man' }]

    async findAll() {
        const person = await this.personRepository.find();

        return person;
    }

    async findById(id: string) {
        const person = await this.personRepository.findOne(id);

        if (!person) {
            return 1
        }
        
        return person
    }

    createUser(name: string) {

    }
}
