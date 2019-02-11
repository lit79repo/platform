const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
class database {
    constructor(path) {
        this.path = path;
        this.low = low;
        this.adapter = new FileSync(path);
        this.db = low(this.adapter);
        this.db.defaults({
            users: [],
            homework: [],
            lessons: []
        }).write();
    }
}
module.exports = database;