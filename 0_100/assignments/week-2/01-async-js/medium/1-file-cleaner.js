// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


const fs = require("fs");

const fileCleaner = async (filePath) => {
    try{
        const fileContent = fs.readFileSync(filePath, "utf8");
        const cleaner = fileContent.replace(/\s+/g, " ")
        fs.writeFileSync("01-async-js/medium/cleanedFile.txt", cleaner, (err) => {
            if(err){
                console.log("Something went wrong. Check Again.");
            }
        });
    } catch (error) {
        console.log("Error Ocuured.");
    }
};

fileCleaner("01-async-js/medium/firstfile.txt");
console.log("Fille Created at the given address.")