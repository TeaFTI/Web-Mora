----------
-- Role --
----------

-- Role: yk
-- DROP ROLE IF EXISTS yk;

CREATE ROLE yk WITH
  LOGIN
  NOSUPERUSER
  INHERIT
  NOCREATEDB
  NOCREATEROLE
  NOREPLICATION
  NOBYPASSRLS
  ENCRYPTED PASSWORD '<>';

COMMENT ON ROLE yk IS 'YK User';

--------------
-- Database --
--------------

-- Database: yk

-- DROP DATABASE IF EXISTS yk;

CREATE DATABASE yk
    WITH
    OWNER = yk
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

COMMENT ON DATABASE yk
    IS 'YK Database';

GRANT TEMPORARY, CONNECT ON DATABASE yk TO PUBLIC;

GRANT ALL ON DATABASE yk TO yk;


-----------
-- Table --
-----------

-- Table: onigiri.account_type

-- DROP TABLE IF EXISTS onigiri.account_type;

CREATE TABLE IF NOT EXISTS onigiri.account_type
(
    id uuid NOT NULL,
    name text COLLATE pg_catalog.unicode NOT NULL,
    description text COLLATE pg_catalog.unicode,
    CONSTRAINT account_type_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS onigiri.account_type
    OWNER to yk;

COMMENT ON TABLE onigiri.account_type
    IS 'Account Type Table';

-- Table: onigiri.account

-- DROP TABLE IF EXISTS onigiri.account;

CREATE TABLE IF NOT EXISTS onigiri.account
(
    id uuid NOT NULL,
    account_type_id uuid NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT account_pkey PRIMARY KEY (id),
    CONSTRAINT account_account_type_id_fkey FOREIGN KEY (account_type_id)
        REFERENCES onigiri.account_type (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS onigiri.account
    OWNER to yk;

COMMENT ON TABLE onigiri.account
    IS 'Account Table';

-- Table: onigiri.contact

-- DROP TABLE IF EXISTS onigiri.contact;

CREATE TABLE IF NOT EXISTS onigiri.contact
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    prefix text COLLATE pg_catalog.unicode,
    first_name text COLLATE pg_catalog.unicode NOT NULL,
    middle_name text COLLATE pg_catalog.unicode,
    last_name text COLLATE pg_catalog.unicode,
    suffix text COLLATE pg_catalog.unicode,
    phonetic_first_name text COLLATE pg_catalog.unicode,
    phonetic_middle_name text COLLATE pg_catalog.unicode,
    phonetic_last_lame text COLLATE pg_catalog.unicode,
    nickname text COLLATE pg_catalog.unicode,
    CONSTRAINT contact_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS onigiri.contact
    OWNER to yk;

COMMENT ON TABLE onigiri.contact
    IS 'Contact Table';

-- Table: onigiri.country

-- DROP TABLE IF EXISTS onigiri.country;

CREATE TABLE IF NOT EXISTS onigiri.country
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    name text COLLATE pg_catalog.unicode NOT NULL,
    official_state_name text COLLATE pg_catalog.unicode NOT NULL,
    iso_3166_1 text COLLATE pg_catalog.unicode NOT NULL,
    iso_3166_1_alpha_2 text COLLATE pg_catalog.unicode NOT NULL,
    iso_3166_1_alpha_3 text COLLATE pg_catalog.unicode NOT NULL,
    CONSTRAINT country_pkey PRIMARY KEY (id),
    CONSTRAINT country_iso_3166_1_alpha_2_key UNIQUE (iso_3166_1_alpha_2),
    CONSTRAINT country_iso_3166_1_alpha_3_key UNIQUE (iso_3166_1_alpha_3),
    CONSTRAINT country_iso_3166_1_key UNIQUE (iso_3166_1),
    CONSTRAINT country_name_key UNIQUE (name),
    CONSTRAINT country_official_state_name_key UNIQUE (official_state_name)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS onigiri.country
    OWNER to yk;

COMMENT ON TABLE onigiri.country
    IS 'Country Table';

-- Table: onigiri.division

-- DROP TABLE IF EXISTS onigiri.division;

CREATE TABLE IF NOT EXISTS onigiri.division
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    country_id uuid NOT NULL,
    name text COLLATE pg_catalog.unicode NOT NULL,
    iso_3166_2 text COLLATE pg_catalog.unicode NOT NULL,
    CONSTRAINT division_pkey PRIMARY KEY (id),
    CONSTRAINT division_country_id_fkey FOREIGN KEY (country_id)
        REFERENCES onigiri.country (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS onigiri.division
    OWNER to yk;

COMMENT ON TABLE onigiri.division
    IS 'Division Table';

-- Table: onigiri.city

-- DROP TABLE IF EXISTS onigiri.city;

CREATE TABLE IF NOT EXISTS onigiri.city
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    division_id uuid NOT NULL,
    name text COLLATE pg_catalog.unicode NOT NULL,
    CONSTRAINT city_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS onigiri.city
    OWNER to yk;

COMMENT ON TABLE onigiri.city
    IS 'City Table';

-- Table: onigiri.address

-- DROP TABLE IF EXISTS onigiri.address;

CREATE TABLE IF NOT EXISTS onigiri.address
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    city_id uuid NOT NULL,
    street text COLLATE pg_catalog.unicode NOT NULL,
    postal_code text COLLATE pg_catalog.unicode NOT NULL,
    latitude numeric(13,10),
    longitude numeric(13,10),
    CONSTRAINT address_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS onigiri.address
    OWNER to yk;

COMMENT ON TABLE onigiri.address
    IS 'Address Table';
