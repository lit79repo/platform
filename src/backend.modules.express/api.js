let express = require('express');
let express_graphql = require('express-graphql');
let graphqlModule = require("./api.db");
var router = express.Router();
router.use('/', express_graphql({
    schema: graphqlModule.schema,
    rootValue: graphqlModule.root,
    graphiql: true
}));
module.exports = router;