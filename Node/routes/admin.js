const express = require("express");
const router = express.Router();

router.get('/admin', (req, res) => {
    res.send('User Page');
});

router.post('/admin', (res, req) => {
    res.send('Login Page');
})

router.put('/admin:id', (req, res) => {
    res.send('Update Page');
})

router.delete('/admin:id', (req, res) => {
    res.send('Delete Page');
});

module.exports = router;