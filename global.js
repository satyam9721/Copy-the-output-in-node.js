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

if(fs.existsSync("Your-files-here")){
    console.log("already there!")
}else{
    fs.mkdir("Your-files-here",function(err){
        if(err){
            console.log(`ERROR: ${err}`);
        }else{
            console.log("directory created");
        }
    })
}

-------------------------------------------------------------------------------------------
    //renaming the particular file
    
    const fs = require("fs")

fs.renameSync("./list.js","./project.js")
console.log("list.js is renamed")

//removing the particular file(project.js) from directory
const fs = require("fs")

fs.unlinkSync("./project.js")

//deleting notes.md file by code
const fs = require("fs")

fs.unlink("note.md",function(err){
    if(err){
        throw err;
    }
    console.log("Notes are gone")
})

-----------------------------------------------------------------------------
    //displaying data from js to on html
    const datas=[
    {name:"Ajay",Profression:"Software Engineer"},
    {name:"Alok",Profression:"Software Engineer"}
];


function getDatas(){
    setTimeout(() =>{
        let output ="";
        datas.forEach((data,index)=>{
            output+=`<li>${data.name}</li>`
        })
        document.body.innerHTML=output
    },1000);
}

getDatas();

// inserting data quickly using callback function
const datas=[
    {name:"Ajay",Profression:"Software Engineer"},
    {name:"Alok",Profression:"Software Engineer"}
];


function getDatas(){
    setTimeout(() =>{
        let output ="";
        datas.forEach((data,index)=>{
            output+=`<li>${data.name}</li>`
        })
        document.body.innerHTML=output
    },1000);
}
function createdata(newdata,callback){
    setTimeout(()=>{
        datas.push(newdata);
        callback();

    },2000)
}
createdata({name:"vivek",Profression:"Software Engineer"},getDatas)
getDatas();
-----------------------------------------------------------------------
    //inserting data using async or await
    async function start(){
    await createdata({name:"Vivek",Profression:"Software Engineer"})
    getDatas();
}
start();
----------------------------------------------------------------------------
//closure property

var sum= function(a){
    console.log("Hello Viewers"+ a);
    var c=4;
    return function(b){
        return a+b+c;
    }
}
var store = sum(200);
console.log(store(5));

// returning multiple function in one function
var sum = function(a,b,c){
    return{
        getsumtwo:function(){
            return a+b;
        },
        getsumthree:function(){
            return a+b+c;
        }
    }
}

var store = sum(3,4,5);
console.log(store.getsumtwo());
console.log(store.getsumthree());
---------------------------------------------------------------------------------
    //working on Node.js-api
    
    const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


app.post("/students",(req,res)=>{
    res.send("Hello sexy Satyam");
})

app.listen(port,()=>{
    console.log(`Connected to this ${port}`)
})
//to run the app Node.js-api\Restfulapi> node src/app.js
---------------------------------------------------------------------------------
    //loop and for each loop
    
    const companies = [
    {name:"Google",category:"Product Based",start:1981,end:2004},
    {name:"Amazon",category:"Product Based",start:1992,end:2008},
    {name:"Paytm",category:"Product Based",start:1992,end:2007},
    {name:"Conforge",category:"Service Based",start:1989,end:2010},
    {name:"Midtree",category:"Service Based",start:1989,end:2010},



];

const ages =[33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];


for(let i=0;i<=companies.length;i++){
    console.log(companies[i]);
}

//for each loop

companies.forEach(function(company,index){
    console.log(index);
})



companies.forEach((company,index)=>{
    console.log(index);
})
    

//filter
const ages =[33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

//by 1st method
const age = ages.filter(function(age){
    if(age>=20){
        return true;
    }
})

//by 2nd method
const finalage = ages.filter(age => age >=30)
console.log(finalage)
