import { Module } from '@nestjs/common';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { ConfigService } from '@nestjs/config';
import * as schema from 'src/root/application/database/schemas/index.schema';
export const DRIZZLE = Symbol("'drizzle-connection'");

@Module({
  providers: [
    {
      provide: DRIZZLE,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const databasURL = configService.get<string>('DATABASE_URL');
        const pool = new Pool({
          connectionString: databasURL,
          ssl: {
            rejectUnauthorized: false,
          },
           
        });
        return drizzle(pool, { schema, logger: true }, ) as NodePgDatabase<typeof schema>;
      },
    },
  ],
  exports: [DRIZZLE],
})
export class DatabaseModule {}