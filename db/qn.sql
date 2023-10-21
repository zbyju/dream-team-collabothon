-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler  version: 0.9.3
-- PostgreSQL version: 13.0
-- Project Site: pgmodeler.io
-- Model Author: ---
-- object: admin | type: ROLE --
-- DROP ROLE IF EXISTS admin;
CREATE ROLE admin WITH 
	SUPERUSER
	CREATEDB
	CREATEROLE
	INHERIT
	LOGIN
	REPLICATION
	BYPASSRLS;
-- ddl-end --


-- Database creation must be performed outside a multi lined SQL file. 
-- These commands were put in this file only as a convenience.
-- 
-- object: collab | type: DATABASE --
-- DROP DATABASE IF EXISTS collab;
CREATE DATABASE collab;
-- ddl-end --


-- object: public.transactions | type: TABLE --
-- DROP TABLE IF EXISTS public.transactions CASCADE;
CREATE TABLE public.transactions (
	id serial NOT NULL,
	date timestamp NOT NULL,
	description varchar,
	category integer,
	"user" integer NOT NULL
);
-- ddl-end --
ALTER TABLE public.transactions OWNER TO admin;
-- ddl-end --

INSERT INTO public.transactions (id, date, description, category, "user") VALUES (E'1', E'1347085827', E'gasoline', E'1', E'1');
-- ddl-end --

-- object: public.users | type: TABLE --
-- DROP TABLE IF EXISTS public.users CASCADE;
CREATE TABLE public.users (
	id serial NOT NULL,
	name varchar,
	esg integer,
	password varchar
);
-- ddl-end --
ALTER TABLE public.users OWNER TO admin;
-- ddl-end --

INSERT INTO public.users (id, name, esg, password) VALUES (E'1', E'guest', E'1', E'1234');
-- ddl-end --

-- object: public.categories | type: TABLE --
-- DROP TABLE IF EXISTS public.categories CASCADE;
CREATE TABLE public.categories (
	id serial NOT NULL,
	name varchar NOT NULL,
	description varchar,
	score integer
);
-- ddl-end --
ALTER TABLE public.categories OWNER TO admin;
-- ddl-end --

INSERT INTO public.categories (id, name, description, score) VALUES (E'1', E'gasoline', E'1 liter of gasoline', E'8');
-- ddl-end --

-- object: public.stats | type: TABLE --
-- DROP TABLE IF EXISTS public.stats CASCADE;
CREATE TABLE public.stats (
	id serial NOT NULL,
	esg integer NOT NULL
);
-- ddl-end --
ALTER TABLE public.stats OWNER TO admin;
-- ddl-end --

INSERT INTO public.stats (id, esg) VALUES (E'1', E'0');
-- ddl-end --

-- object: stats_id | type: INDEX --
-- DROP INDEX IF EXISTS public.stats_id CASCADE;
CREATE UNIQUE INDEX stats_id ON public.stats
	USING btree
	(
	  id
	);
-- ddl-end --

-- object: users_id | type: INDEX --
-- DROP INDEX IF EXISTS public.users_id CASCADE;
CREATE UNIQUE INDEX users_id ON public.users
	USING btree
	(
	  id
	);
-- ddl-end --

-- object: categories_id | type: INDEX --
-- DROP INDEX IF EXISTS public.categories_id CASCADE;
CREATE UNIQUE INDEX categories_id ON public.categories
	USING btree
	(
	  id
	);
-- ddl-end --

-- object: transactions_id | type: INDEX --
-- DROP INDEX IF EXISTS public.transactions_id CASCADE;
CREATE UNIQUE INDEX transactions_id ON public.transactions
	USING btree
	(
	  id
	);
-- ddl-end --

-- object: "user" | type: CONSTRAINT --
-- ALTER TABLE public.transactions DROP CONSTRAINT IF EXISTS "user" CASCADE;
ALTER TABLE public.transactions ADD CONSTRAINT "user" FOREIGN KEY ("user")
REFERENCES public.users (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: category | type: CONSTRAINT --
-- ALTER TABLE public.transactions DROP CONSTRAINT IF EXISTS category CASCADE;
ALTER TABLE public.transactions ADD CONSTRAINT category FOREIGN KEY (category)
REFERENCES public.categories (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: esg | type: CONSTRAINT --
-- ALTER TABLE public.users DROP CONSTRAINT IF EXISTS esg CASCADE;
ALTER TABLE public.users ADD CONSTRAINT esg FOREIGN KEY (esg)
REFERENCES public.stats (id) MATCH FULL
ON DELETE CASCADE ON UPDATE NO ACTION;
-- ddl-end --


