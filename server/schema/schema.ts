
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const posts = pgTable('post', {
    id : serial('id').primaryKey().notNull(),
    title : varchar('title', {length: 255}).notNull(),
})