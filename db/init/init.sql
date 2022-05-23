-- Table: public.search_history

DROP TABLE IF EXISTS public.search_history;

CREATE TABLE IF NOT EXISTS public.search_history
(
    id bigserial NOT NULL,
    date_saved timestamp without time zone NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),
    user_id character varying(200) COLLATE pg_catalog."default" NOT NULL,
    search_term character varying(5000) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT search_history_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.search_history
    OWNER to postgres;


-- Table: public.search_history

DROP TABLE IF EXISTS public.api_requests;

CREATE TABLE IF NOT EXISTS public.api_requests
(
    id bigserial NOT NULL,
    date_saved timestamp without time zone NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),
    user_id character varying(200) COLLATE pg_catalog."default" NOT NULL,
    api_url character varying(5000) COLLATE pg_catalog."default" NOT NULL,
    request_body character varying(5000) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT api_requests_pkey PRIMARY KEY (id)
)    

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.api_requests
    OWNER to postgres;

-- here we should actually create a user for the app with only required permissions...