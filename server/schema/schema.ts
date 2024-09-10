import { serial } from "drizzle-orm/mysql-core";
import { pgTable, text } from "drizzle-orm/pg-core";

export const posts = pgTable('post', {
    id : serial('id').primaryKey().notNull(),
    title : text('title').notNull(),
})