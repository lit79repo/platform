let express = require('express');
let express_graphql = require('express-graphql');
let apiHomework = require("./api.homework");
var router = express.Router();
router.get("/", (req, res)=>{
    res.send(`
    <html>
        <ul>
            <li><a href="/api/hw"><strong>/hw</strong></a>: HomeWork GraphiQL</li>
        </ul>
    </html>
    `);
});
router.use('/hw', express_graphql({
    schema: apiHomework.schema,
    rootValue: apiHomework.root,
    graphiql: true
}));
module.exports = router;