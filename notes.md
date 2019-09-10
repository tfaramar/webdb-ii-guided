# notes

## ways of managing a db schema:

1. migrations (preferred)
2. using a gui/cli tool (i.e. SQLite Studio)
3. use SQL scripts

## history of building software

- v1: record client's phone number 2000
- v3: 2002, record client's email
- v4: 2007, contact info (type, value, multiple emails/phone numbers/etc)
    --- here, we don't have an email or phone number on the client table ---

what happens if we run v3 code against v4 database?

##EVERY TABLE MUST HAVE A PRIMARY KEY


## Steps

-npx knex init to create knexfile.js
-moved config object to knexfile.js
-removed staging and production properties from knexfile
-added db-config.js

## Every change on a schema, you should create a new migration file for.