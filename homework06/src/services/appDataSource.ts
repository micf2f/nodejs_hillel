import { DataSource } from "typeorm";


export const appDataSource = new DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    url: process.env['DATABASE_URL'],
    synchronize: true,
    logging: false,
    entities: ['./src/models/*.ts']
})