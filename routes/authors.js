

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('List of Authors');
});

// router.get('/:id', (req, res) => {
//     res.send(`Details of Author ID: ${req.params.id}`);
// });

module.exports = router;


