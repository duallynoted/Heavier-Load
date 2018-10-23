const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//this query will make post calls from member-generated data, creating body area measurements to track progress over time
router.post('/measurements/:id', (req, res) => {
    let person_id = req.user.id
    const newMeasurement= req.body;
    const queryValues = [newMeasurement.body_area, newMeasurement.measurement, person_id];
    pool.query(`INSERT INTO "measurement" ("body_area","measurement","person_id")
    VALUES ($1,$2,$3);`, queryValues)
        .then((results) => {
            console.log('HEEEEEEEYYYY', results);
            res.send(results.rows);            
        }).catch((error) => {
            console.log('Error POSTING measurement to PostgreSQL', error);
            res.sendStatus(500);
        })//end POST pool query
});//end POST call server side

module.exports = router;