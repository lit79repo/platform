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
    return homeworkvalue.filter(homework => {
        return homework.id == id;
    })[0];
}
let getHomeWorks = function(args) {
    if (args.topic) {
        var topic = args.topic;
        return homeworkvalue.filter(homework => homework.topic === topic);
    } else {
        return homeworkvalue;
    }
}
let rootHomeWork = {
    homework: getHomeWork,
    homeworks: getHomeWorks
};
module.exports = {root: rootHomeWork, schema: homeworkSchema};