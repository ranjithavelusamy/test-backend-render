const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('List of Books');
});

// router.get('/:id', (req, res) => {
//     res.send(`Details of Book ID: ${req.params.id}`);
// });

// router.get('/:id/characters', (req, res) => {
//     res.send(`Characters of Book ID: ${req.params.id}`);
// });

module.exports = router;
