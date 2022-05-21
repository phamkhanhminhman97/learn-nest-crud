import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import config from '../ormconfig'

@Module({
  imports: [TypeOrmModule.forRoot(config), PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
