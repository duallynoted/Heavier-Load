const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//this query will make post calls from member-generated data, creating body area measurements to track progress over time
router.post('/:id', (req, res) => {
    let person_id = req.user.id
    const newMeasurement= req.body;
    const queryValues = [newMeasurement.body_area, newMeasurement.measurement, person_id];
    pool.query(`INSERT INTO "measurement" ("body_area","measurement","person_id")
    VALUES ($1,$2,$3);`, queryValues)
        .then((results) => {
            console.log('NEWMEASUREMENT: ', results);
            res.send(results.rows);            
        }).catch((error) => {
            console.log('Error POSTING measurement to PostgreSQL', error);
            res.sendStatus(500);
        })//end POST pool query
});//end POST call server side

//this query will make a call to the server to get user-generated measurements 
router.get('/:id', (req, res) => {
    let id = req.params.id    
    pool.query(`SELECT * FROM "measurement"
    WHERE "person_id" = $1;`, [id])
        .then((results) => {
            res.send(results.rows);          
        }).catch((error) => {   
            res.sendStatus(500);
            console.log('Error GETTING measurements', error);
        });//end GET pool query
});//end GET call server side

module.exports = router;