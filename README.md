# Heavier Load
Full stack fitness application which allows users to easily track weights used for a workout or series of workouts. Users can also enter body measurements to track progress. This application removes the hassle of keeping up with tracking sheets or pen and paper, while also being kinder on the environment.

This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).


## Prerequisites

Make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)
- npm install will install dependencies needed to run the program
- npm run server to get server running on localhost 5000
- npm run client to get client running on localhost 3000


## Create database and tables

Create a database called `heavier_load`, or whatever you want. 

##1
```SQL
CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "first_name" VARCHAR(60),
    "last_name" VARCHAR(60),
    "height" VARCHAR(16),
    "weight" VARCHAR (40),
    "gender" VARCHAR(40),
    "goal" VARCHAR(300)
 );
```

##2
```SQL
CREATE TABLE "day_of_week" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (300),
	"new_day_id" INT REFERENCES "person" 
);
```

##3
```SQL
CREATE TABLE "custom_exercise" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(120),
    "weight_load" INT,
    "rep_scheme" VARCHAR (120),
    "day_id" INT REFERENCES "day_of_week",
    "person_id" INT REFERENCES "person"
);
```

##4
```SQL
CREATE TABLE "measurement" (
    "id" SERIAL PRIMARY KEY,
    "body_area" VARCHAR(120),
    "measurement" INT,
    "person_id" INT REFERENCES "person"
);
```
A detailed view of relation tables needed can be found in database.sql

