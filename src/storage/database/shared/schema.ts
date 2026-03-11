import { pgTable, index, unique, varchar, boolean, timestamp, serial, text, integer } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const adminUsers = pgTable("admin_users", {
	id: varchar({ length: 36 }).default(sql`gen_random_uuid()`).primaryKey().notNull(),
	username: varchar({ length: 50 }).notNull(),
	password: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).notNull(),
	name: varchar({ length: 100 }),
	role: varchar({ length: 20 }).default('admin').notNull(),
	isActive: boolean("is_active").default(true),
	lastLoginAt: timestamp("last_login_at", { withTimezone: true, mode: 'string' }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
}, (table) => [
	index("admin_users_email_idx").using("btree", table.email.asc().nullsLast().op("text_ops")),
	index("admin_users_username_idx").using("btree", table.username.asc().nullsLast().op("text_ops")),
	unique("admin_users_username_unique").on(table.username),
	unique("admin_users_email_unique").on(table.email),
]);

export const healthCheck = pgTable("health_check", {
	id: serial().notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
});

export const articles = pgTable("articles", {
	id: serial().primaryKey().notNull(),
	title: varchar({ length: 255 }).notNull(),
	slug: varchar({ length: 255 }).notNull(),
	excerpt: text(),
	content: text().notNull(),
	categoryId: integer("category_id"),
	author: varchar({ length: 100 }),
	authorId: varchar("author_id", { length: 36 }),
	coverImage: varchar("cover_image", { length: 500 }),
	tags: text(),
	status: varchar({ length: 20 }).default('draft').notNull(),
	viewCount: integer("view_count").default(0),
	isFeatured: boolean("is_featured").default(false),
	publishedAt: timestamp("published_at", { withTimezone: true, mode: 'string' }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
}, (table) => [
	index("articles_category_id_idx").using("btree", table.categoryId.asc().nullsLast().op("int4_ops")),
	index("articles_created_at_idx").using("btree", table.createdAt.asc().nullsLast().op("timestamptz_ops")),
	index("articles_slug_idx").using("btree", table.slug.asc().nullsLast().op("text_ops")),
	index("articles_status_idx").using("btree", table.status.asc().nullsLast().op("text_ops")),
	unique("articles_slug_unique").on(table.slug),
]);

export const categories = pgTable("categories", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 100 }).notNull(),
	slug: varchar({ length: 100 }).notNull(),
	description: text(),
	parentId: integer("parent_id"),
	sortOrder: integer("sort_order").default(0),
	isActive: boolean("is_active").default(true),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
}, (table) => [
	index("categories_parent_id_idx").using("btree", table.parentId.asc().nullsLast().op("int4_ops")),
	index("categories_slug_idx").using("btree", table.slug.asc().nullsLast().op("text_ops")),
	unique("categories_slug_unique").on(table.slug),
]);

export const quizSubmissions = pgTable("quiz_submissions", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 100 }).notNull(),
	email: varchar({ length: 255 }),
	phone: varchar({ length: 50 }),
	wechat: varchar({ length: 100 }),
	basicAnswer: varchar("basic_answer", { length: 1 }).notNull(),
	professionalAnswers: text("professional_answers").notNull(),
	resultType: varchar("result_type", { length: 50 }).notNull(),
	resultTitle: varchar("result_title", { length: 255 }).notNull(),
	resultBadge: varchar("result_badge", { length: 50 }).notNull(),
	recommendation: varchar({ length: 50 }).notNull(),
	scoreA: integer("score_a").notNull(),
	scoreB: integer("score_b").notNull(),
	scoreC: integer("score_c").notNull(),
	emailSent: boolean("email_sent").default(false),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	index("quiz_submissions_created_at_idx").using("btree", table.createdAt.asc().nullsLast().op("timestamptz_ops")),
	index("quiz_submissions_email_idx").using("btree", table.email.asc().nullsLast().op("text_ops")),
]);
