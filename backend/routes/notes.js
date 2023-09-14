const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    obj = {
        a : "guru",
        num : 13
    }
    res.json(obj)
})

module.exports = router