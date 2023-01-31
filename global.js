process.stdout.write("Hello ");

const questions =["what is your name?",
"what would you rather be doing",
"what is your preferred programming language"

];
const answer =[]

function ask(i){
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
}

process.stdin.on("data",function(data){
process.stdout.write(data.toString().trim());    
})




ask(answer.length);

--------------------------------------------------------------------------
//exporting files features to another file 

//mymodule.js


let count =0;

const inc = () => ++count;
const dec = () => --count;

const getCount = () =>count;

module.exports ={
    anything:true,
    who:"Bill",
    count,
    inc,
    dec,
    getCount
};

//creating a app.js file

//app.js
const mymodule = require("./my_module");

console.log(mymodule.anything)
console.log(mymodule.who)
console.log(mymodule.count)
console.log(mymodule.inc())
//after that run command node app

------------------------------------------------------------------------------------------
//creating the custom module

const events = require("events")

let emitter = new events.EventEmitter();

emitter.on("customEvent",(message,user)=>{
    console.log(`${user}: ${message}`);
});

emitter.emit("customEvent","Hello world","computer");
emitter.emit("customEvent","That's pretty cool","eve");

process.stdin.on("data",(data)=>{
    const input = data.toString().trim();

    if(input === "exit"){
        emitter.emit("customEvent","Goodbye","process");
        process.exit();
    }
    emitter.emit(
        "customEvent",
        data.toString().trim(),
        "terminal"
    );



})

---------------------------------------------------------------------------------------------------------------------
//reading the filename and extension
const fs = require("fs");

let files = fs.readdirSync("./")

console.log(files);

----------------------------------------------------------------------------------------------------------------------
//reading the file's content(readme.md)
const fs = require("fs");

fs.readFile("./readme.md","UTF-8",(err,ipsum)=>{
    console.log(ipsum)
})
    
   
------------------------------------------------------------------------------------------------------------------------
//creating javascript.md file and inserting the content of file
const fs = require("fs");
//md 's content goes into new created file which is javascript.md
let md =`
This is a new file

==================
ES6 Template String are cool.

*Template Strings
*Node File System
*Readline CLIs

`
;

fs.writeFile("javascript.md",md.trim(),function(){
    console.log("Markdown Created")
})

//appending the javascript.md file
const fs = require("fs");
//md 's content goes into new created file which is javascript.md
let md =`
This is a new file

==================
ES6 Template String are cool.

*Template Strings
*Node File System
*Readline CLIs

`
;

fs.writeFile("javascript.md",md.trim(),function(err){
 if(err){
    throw err;
 }
 fs.appendFileSync("javascript.md","\n\n### Node.js Everyone!");

 console.log("Markdown created")

})

//creating directory or floder name with  Your-files-here


const fs = require("fs");

fs.mkdir("Your-files-here",function(err){
    if(err){
        console.log(`ERROR: ${err}`);
    }else{
        console.log("directory created");
    }
})
