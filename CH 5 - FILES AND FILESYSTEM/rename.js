//from 'Renaming and removing files' video

var fs = require('fs');

fs.renameSync("old_name.js", "new_name.json");

console.log(`**enter_old_file_name_here** file renamed`);

fs.rename( "old_name.js", "new_name.json", (err) => {
    err ? console.log(err) : console.log(`**enter_old_file_name_here** moved successfully`);
});

