import * as schema from '../schemas/index.schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

export type DatabaseService = NodePgDatabase<typeof schema>;