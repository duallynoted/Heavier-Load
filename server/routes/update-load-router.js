const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    console.log(req.body);
    
    pool.query(`UPDATE "custom_exercise" SET "title"=$1, "weight_load"=$2 WHERE "id"=$3;`, [body.title, body.weight_load, id])
    .then(() => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error updating load', error);
        res.sendStatus(500);
    });//end PUT pool query
});//end PUT call server side

module.exports = router;