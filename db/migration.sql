-- Table: public.search_history

DROP TABLE IF EXISTS public.search_history;

CREATE TABLE IF NOT EXISTS public.search_history
(
    id bigserial NOT NULL,
    date_saved timestamp NOT NULL default (now() at time zone 'utc'),
    user_id character varying(200) COLLATE pg_catalog."default" NOT NULL,
    search_term character varying(5000) COLLATE pg_catalog."default" NOT NULL,   
    CONSTRAINT search_history_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.search_history
    OWNER to postgres;

/*
--INSERT INTO search_history (user_id, search_term) VALUES ('Akseli', 'lemur ringtailed');
--INSERT INTO search_history (user_id, search_term) VALUES ('Akseli', 'toucan yellow');

SELECT  * FROM search_history ORDER BY date_saved DESC
*/