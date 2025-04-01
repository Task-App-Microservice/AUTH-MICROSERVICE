import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";


export const verificationAccountSchema = pgTable("verification_accounts",{
    id: serial().primaryKey(),
    identifier: varchar().unique(),
    code: varchar().unique(),
    expires : timestamp().defaultNow(),
})