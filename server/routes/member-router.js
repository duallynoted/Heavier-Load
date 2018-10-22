const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "person"
    ORDER BY "id";`)
        .then((results) => {
            res.send(results.rows);
        }).catch((error) => {   
            res.sendStatus(500);
            console.log('error', error);
        });//end GET pool query
});//end GET call server side

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    console.log(body);      
    pool.query(`UPDATE "person" 
    SET "first_name"=$1,"last_name"=$2,"height"=$3,"weight"=$4,"gender"=$5,"goal"=$5
    WHERE "id" = $6;`, [body.first_name, body.last_name, body.height, body.weight, body.gender, id])
    .then(() => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error updating member', error);
        res.sendStatus(500);
    });//end PUT pool query
});//end PUT call server side



module.exports = router;