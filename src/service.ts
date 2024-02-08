import { injectable } from 'tsyringe';
import { Database } from './database';

@injectable()
export class MyService {
  constructor(private database: Database) {}

  startDatabase(): void {
    console.log("MyService.startDatabase");
    this.database.connect();
  }
}
