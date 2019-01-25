let express = require('express');
let router = express.Router();
router.get(["/", "/ping"], (req, res) => {
    res.send('PONG');
});
module.exports = {router: router, path: "/diag"};