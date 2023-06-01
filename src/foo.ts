import { injectable } from "tsyringe";
import { Database } from "./database";

@injectable()
export class Foo {
  constructor(private database: Database) {}

  startDatabase(): void {
    this.database.connect();
  }
}