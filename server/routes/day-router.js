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

module.exports = router;