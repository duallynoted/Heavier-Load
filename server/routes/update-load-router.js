const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    console.log(req.body);

    pool.query(`UPDATE "custom_exercise" 
    SET "title"=$1, "weight_load"=$2, "rep_scheme"=$3 
    WHERE "id"=$4;`, [body.title, body.weight_load, body.rep_scheme, id])
        .then(() => {
            res.sendStatus(200);
        }).catch(error => {
            console.log('error updating load', error);
            res.sendStatus(500);
        });//end PUT pool query
});//end PUT call server side

module.exports = router;