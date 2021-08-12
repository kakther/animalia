const express = require('express');
const router = express.Router();


router.post('/animals', (req, res) => {
    res.send('send')
})


module.exports = router