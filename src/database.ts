import { InjectionToken, inject, injectable } from 'tsyringe';

export interface DatabaseOptions {
  url: string;
}

export const DatabaseOptionsToken: InjectionToken<DatabaseOptions> =
  'DatabaseOptions';

@injectable()
export class Database {
  constructor(@inject(DatabaseOptionsToken) private options: DatabaseOptions) {}

  connect(): void {
    console.log(`connecting to ${this.options.url}`);
  }
}
