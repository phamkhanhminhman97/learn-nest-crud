import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
    constructor(private personSerivce: PersonService) {}

    @Get()
    async findAll() {
        return this.personSerivce.findAll()
    }

    @Get('/:id')
    async findById(@Param('id') id: string) {
        return this.personSerivce.findById(id)
    }

    @Post()
    createUser(@Body() body): any {
        return this.personSerivce.createUser(body.name)
    }

}
