import { DataSource } from 'typeorm';

const ormConfig: DataSource = new DataSource({
    type: 'mssql',
    host: 'localhost',
    port: 1433, 
    username: '****',
    password: '******',
    database: 'SinitsynDM_ITKN',
    schema: "dbo",
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    logging: true,
    options: {
      encrypt: true,
      trustServerCertificate: true,
    },
    migrationsTableName: 'migrations',
    migrations: ['dist/src/migrations/*{.ts,.js}'],
});
export default ormConfig;
