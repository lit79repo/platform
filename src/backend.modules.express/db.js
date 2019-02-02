const nano = require('nano')('http://localhost:5984');
class Database{
    constructor(name){
        if(name !== undefined){
            this.name = name;
        }else{
            this.name = "lit79";
        }
        this.nano = nano;
    }
    async insert(data, document){
        const body = await this.nano.db.use(this.name).insert(data, document);
        return body;    
    }
    async get(document){
        const body = await this.nano.db.use(this.name).get(document);
        return body;
    }
}
module.exports = new Database();