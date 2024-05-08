// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require("fs");

const fileReader = async (filePath) => {
    try{
        const fileData = fs.readFileSync(filePath, "utf8");

        let a = 1;
        for(let index = 0; index < 10000000000 ; index++){
            a += index;
        }

        console.log(fileData);
    } catch(error){
        console.log("Error occurred while reading.");
    }
};

fileReader("01-async-js/easy/file.txt");