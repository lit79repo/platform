const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const db = lowdb(new FileSync("db.json"));

db.defaults({
    users: [],
    lessons: [],
    homework: []
});

module.exports = db;