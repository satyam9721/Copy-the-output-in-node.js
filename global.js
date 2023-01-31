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
//after that run command node app
