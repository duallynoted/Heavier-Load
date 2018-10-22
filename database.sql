--create database called "heavier_load"

--create table which handles login id and profile information
CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "first_name" VARCHAR(60),
    "last_name" VARCHAR(60),
    "height" VARCHAR(16),
    "weight" INT,
    "gender" VARCHAR(40),
    "goal" VARCHAR(300
 );

--create table to hold member-generated exercises to track weight-load over time
CREATE TABLE "custom_exercise" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR(120),
	"weight_load" INT,
	"day" VARCHAR (120),
	"person_id" INT REFERENCES "person"
);

--create table to hold member-generated measurements to track progress
CREATE TABLE "measurement" (
	"id" SERIAL PRIMARY KEY,
	"body_area" VARCHAR(120),
	"measurement" INT,
	"person_id" INT REFERENCES "person"
	);

--query that updates(put)profile information	
UPDATE "person" 
SET "first_name"='Daniel',"last_name"='Ridley',"height"=73, "weight"=239,"gender"='male',"goal"='Get stronger, trimmer, and more awesomer.'
WHERE "id" = 1;

UPDATE "person" 
SET "first_name"='Hiram',"last_name"='Willick',"height"=68, "weight"=250,"gender"='male',"goal"='Lose weight.'
WHERE "id" = 2;

--query that will insert member-generated data into custom_exercise table
INSERT INTO "custom_exercise" ("title","weight_load","day","person_id")
VALUES ('Bicep Curl',25,'Mondays',1);

INSERT INTO "measurement" ("body_area", "measurement","person_id")
VALUES('left arm',17,1);

--query that selects first name (or whatever you want by ."x")
SELECT "person"."first_name"
FROM "person"
WHERE "id" = 1;
 
