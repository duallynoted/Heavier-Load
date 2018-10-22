const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//this query will make a call to the server to get member information
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "person"
    ORDER BY "id";`)
        .then((results) => {
            res.send(results.rows);
        }).catch((error) => {   
            res.sendStatus(500);
            console.log('error getting member', error);
        });//end GET pool query
});//end GET call server side

//this query will update a member's profile information	
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    console.log(body);      
    pool.query(`UPDATE "person" 
    SET "first_name"=$1,"last_name"=$2,"height"=$3,"weight"=$4,"gender"=$5,"goal"=$6
    WHERE "id" = $7;`, [body.first_name, body.last_name, body.height, body.weight, body.gender, body.goal, id])
    .then(() => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error updating member', error);
        res.sendStatus(500);
    });//end PUT pool query 
});//end PUT call server side

//this query will make post calls from member-generated data, creating exercises to track weight-load over time
router.post('/', (req, res) => {
    const newExercise= req.body;
    const queryValues = [newExercise.title, newExercise.weight_load, newExercise.day, newExercise.person_id];
    pool.query(`INSERT INTO "custom_exercise" ("title","weight_load","day","person_id")
    VALUES ($1,$2,$3,$4);`, queryValues)
        .then((results) => {
            console.log('HEEEEEEEYYYY', results);
            res.send(results.rows);            
        }).catch((error) => {
            console.log('Error POSTING exercise to PostgreSQL', error);
            res.sendStatus(500);
        })//end POST pool query
});//end POST call server side

module.exports = router;