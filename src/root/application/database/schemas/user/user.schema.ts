import { date, pgTable, serial, timestamp, uuid, varchar } from "drizzle-orm/pg-core";


export const userSchema = pgTable("user",{
    id: serial().primaryKey(),
    uuid: uuid().defaultRandom().unique(),
    email: varchar().unique(),
    name: varchar(),
    password: varchar(),
    emailVerified: timestamp(),
    createdAt: timestamp().defaultNow(),
    updateAt: timestamp().defaultNow(),
})