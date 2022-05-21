import { Person } from "src/person/entities/person.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
 
const config : PostgresConnectionOptions = {
    type: 'postgres',
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "password",
    database: "nest_db",
    entities: ['dist/src/**/*.entity.js'],
    // entities: [Person],
    synchronize: true,
    migrations: [
        'dist/src/db/migrations/*.js'
    ],
    cli: {
        migrationsDir: 'src/db/migrations'
    }
}

export default config;