const nano = require('nano')('http://admin:33327113@192.168.1.25:5984');
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
    async addClass(name){
        await this.insert({name: name}, "Classes");
    }
}
module.exports = new Database();