const repl = require("repl");
class cli {
    constructor() {
        console.log("Welcome!");
        console.log("This is Platform Backend CLI/REPL Console!");
        console.log("Misha Marinenko (c) 2019       MIT LICENSE");
        this.repl = repl;
        this.cli = repl.start('lit79> ');
    }
}
module.exports = cli;