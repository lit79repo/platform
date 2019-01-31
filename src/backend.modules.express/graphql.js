let express = require('express');
let express_graphql = require('express-graphql');
let { buildSchema } = require('graphql');

let homeworkSchema = buildSchema(`
    type Query {
        homework(Class: String!): HomeWork
        homeworks(Lesson: String): [HomeWork]
    },
    type HomeWork {
        Class: String
        Lesson: String
        author: String
        content: String
    }
`);
let homeworkvalue = [
    {
        Class: "8-A",
        Lesson: 'Math',
        author: 'Misha Marinenko',
        content: '#1, #2, #3'
    }
]
let getHomeWork = function(args) { 
    var id = args.id;
    return coursesData.filter(course => {
        return course.id == id;
    })[0];
}
let getHomeWorks = function(args) {
    if (args.topic) {
        var topic = args.topic;
        return coursesData.filter(course => course.topic === topic);
    } else {
        return coursesData;
    }
}
let root = {
    course: getHomeWork,
    courses: getHomeWorks
};
var router = express.Router();
router.use('/graphql', express_graphql({
    schema: homeworkSchema,
    rootValue: homeworkvalue,
    graphiql: true
}));
module.exports = router;