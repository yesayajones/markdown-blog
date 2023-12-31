const express = require('express')
const router = express.Router()

router.get('/new', (req, res) => {
    res.send('In articles')
})

module.exports = router