import 'reflect-metadata';
import { container } from 'tsyringe';
import { Foo } from './foo';
import { DatabaseOptions, DatabaseOptionsToken } from './database';

const databaseOptions: DatabaseOptions = { url: 'mongodb://localhost:27017/' };

container.registerInstance(DatabaseOptionsToken, databaseOptions);
const instance = container.resolve(Foo);

instance.startDatabase();
