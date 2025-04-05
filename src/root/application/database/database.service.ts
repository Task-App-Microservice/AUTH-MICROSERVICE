import { Injectable, Inject } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from 'src/root/application/database/schemas/index.schema';
import { DRIZZLE } from './database.module';

@Injectable()
export class DatabaseService {
  constructor(
    @Inject(DRIZZLE) private readonly db: NodePgDatabase<typeof schema>
  ) {}

  getDatabase(): NodePgDatabase<typeof schema> {
    return this.db;
  }
}
