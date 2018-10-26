const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "day_of_week";`)
        .then((results) => {
            res.send(results.rows);
            console.log(results.rows);
            
        }).catch((error) => {   
            res.sendStatus(500);
            console.log('error getting day', error);
        });//end GET pool query
});//end GET call server side

//this query will make a call to the server to get user-generated days 
router.post('/:id', (req, res) => {
    let new_day_id= req.user.id;
    const newDay= req.body;
    const queryValues = [newDay.name, new_day_id];
    console.log('ADD METHOD',newDay);      
    pool.query(`INSERT INTO "day_of_week" ("name","new_day_id")
    VALUES ($1,$2);`, queryValues)
        .then((results) => {
            console.log('NEWDAY: ', results);
            res.send(results.rows);            
        }).catch((error) => {
            console.log('Error POSTING day to PostgreSQL', error);
            res.sendStatus(500);
        })//end POST pool query
});//end POST call server side

module.exports = router;