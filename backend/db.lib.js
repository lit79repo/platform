let fs = require("fs");
let path = require("path");
class database{
    constructor(basepath, name, checkpoint){
        this.basepath = basepath;
        this.name = name;
        this.checkpoint = checkpoint;
        this.mainPath = path.join(basepath, name, checkpoint);
        fs.access(this.mainPath, fs.constants.F_OK, (err) => {
            if(!err){
                console.log("[DB]", "DB found!");
            }else{
                fs.mkdir(this.mainPath, { recursive: true }, (err) => {
                    if (!err){
                        console.log("[DB]", "DB are created!");
                    }else{
                        console.log("[DB]", "Error Creating DB!", err);
                    }
                  });
            }
          });

    }
    write(segment, data){
        var Return;
        fs.writeFile(path.join(this.mainPath, segment+".json"), JSON.stringify(data), 'utf8', (err)=>{
            if(err) {
                Return = err;
                throw err;
            }else{
                Return = true;
            }
        });
        return Return;
    }
    read(segment){
        var file = fs.readFileSync(path.join(this.mainPath, segment+".json"), 'utf8');
        return JSON.parse(file);
    }
}
module.exports = database;