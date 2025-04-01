CREATE TABLE "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"uuid" uuid DEFAULT gen_random_uuid(),
	"email" varchar,
	"name" varchar,
	"password" varchar,
	"emailVerified" timestamp,
	"createdAt" timestamp DEFAULT now(),
	"updateAt" timestamp DEFAULT now(),
	CONSTRAINT "user_uuid_unique" UNIQUE("uuid"),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "verification_accounts" (
	"id" serial PRIMARY KEY NOT NULL,
	"identifier" varchar,
	"code" varchar,
	"expires" timestamp DEFAULT now(),
	CONSTRAINT "verification_accounts_identifier_unique" UNIQUE("identifier"),
	CONSTRAINT "verification_accounts_code_unique" UNIQUE("code")
);
