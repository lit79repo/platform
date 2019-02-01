const nano = require('nano')('http://localhost:5984');
class database{
    constructor(){
        this.db = nano.db.use(db);
    }
    list(){
        let Return;
        nano.db.list().then((body) => {
            body.forEach((db) => {
                Return = db;
                console.log("[DB]", db);
            });
        });
        return Return;
    }
    get(dbName){
        let Return;
        nano.db.get("lit79").then((body) => {
            Return = body;
        });
        return Return;
    }
    init(){
        nano.db.create("lit79");
    }
}
module.exports = database;
//Under works!!!
