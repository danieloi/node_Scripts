//from 'Renaming and removing directories' video
// DEMONSTRATES MOVING AND DELETING DIRECTORIES

var fs = require('fs');

fs.renameSync("./former_parent_dir/dir_to_move", "./dir_to_move"); //it moves the directory dimply by renaming its path

console.log('Directory Changed');


//REMOVING/DELETING A DIRECTORY
//You CANNOT remove a directory that has files in it
fs.rmdir("./directory_to_remove", (err) => {
    if (err) {
        throw err;
    }
    
    console.log("Directory Removed");
});