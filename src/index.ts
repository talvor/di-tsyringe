import 'reflect-metadata';
import { container } from 'tsyringe';
import { MyService } from './service';
import { DatabaseOptions, DatabaseOptionsToken } from './database';

const databaseOptions: DatabaseOptions = {
  url: 'mongodb://localhost:27017/',
};

container.registerInstance(DatabaseOptionsToken, databaseOptions);
const service = container.resolve(MyService);

service.startDatabase();
