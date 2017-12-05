import fs from 'fs';
import path from 'path';

fs.readdir("./", (err, files) => {
    files.forEach((fileName) => {
        let file = path.join(__dirname, fileName);
        let stats = fs.statSync(file);
        if(stats.isFile()){
            fs.readFile(file, "UTF-8", (err, contents) => {
                console.log(contents);
            })
        }
    })
})