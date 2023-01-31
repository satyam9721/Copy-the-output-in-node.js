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
