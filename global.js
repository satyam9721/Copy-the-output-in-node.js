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

//undefined vs not defined

undefined=> it's mean memory or placeholder is allocated to variable but value is not assigned.

 not defined=> it's mean memory or placeholder is not allocated to variable.

console.log(a);
var a=10;
console.log(a);

//scope

scope means where we can access the value of variable or functions





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


//filter

const companies = [
    {name:"Google",category:"Product Based",start:1981,end:2004},
    {name:"Amazon",category:"Product Based",start:1992,end:2008},
    {name:"Paytm",category:"Product Based",start:1992,end:2007},
    {name:"Conforge",category:"Service Based",start:1989,end:2010},
    {name:"Midtree",category:"Service Based",start:1989,end:2010},



];



const sb = companies.filter(function(company){
    if(company.category==="Service Based"){
        return true;
    }
})

console.log(sb)
-------------------------------------------------------SET----------------------------
//copying the element 
 "use strict";
let myArray=[1,2,3,4];
let obj = new Set(myArray);
obj.add(5);
obj.add(5);
console.log(obj)

//deleting the object
let myArray=[1,2,3,4];
let obj = new Set(myArray);
obj.add(5);
console.log(obj)
obj.delete(5);
console.log(obj)

//checking the element is present or not
let myArray=[1,2,3,4];
let obj = new Set(myArray);
console.log(obj)
console.log(obj.has(1));
-------------------------------------------------------MAP----------------------------
//creating simple map snipet
let myMap = new Map([["a1","Ajay"],["a2","Vikas"]]);
console.log(myMap);

//adding and deleting the element
let myMap = new Map([["a1","Ajay"],["a2","Vikas"]]);
myMap.set("a2","Ajay");
myMap.delete("a2");
console.log(myMap);

//iterating the map
let myMap = new Map([["a1","Ajay"],["a2","Vikas"]]);
myMap.set("a2","Ajay");
myMap.delete("a2");
console.log(myMap);
for(let [key,value] of myMap){
    console.log(`keys ${key},value ${value}`)
}
myMap.forEach((key,value)=>{
    console.log(key,value);
})

-----------------------------------------------closure-properties-------------------------------------
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

var store=sum(4,5,8)
console.log(store.getsumtwo());
console.log(store.getsumthree());
    
----------------------------------call-------------------------------
    //calling another function
    let userDede={
    name: "satyam gupta",
    Age:28,
    Designation:"Software Engineer",
    printDerails: function(){
        console.log(this)
    }
}
userDede.printDerails();

let userDede2={
    name: " maar",
    Age:21,
    Designation:"Software Engineer",
    
}
userDede.printDerails.call(userDede2);
    
//2nd method
let userDede={
    name: "satyam gupta",
    Age:28,
    Designation:"Software Engineer",
   
}

let printDerails=function(){
    console.log(this.name)
}



printDerails.call(userDede);

let userDede2={
    name: " maar",
    Age:21,
    Designation:"Software Engineer",
    
}
//function bowering
printDerails.call(userDede2);

//passing parameter
    
    let userDede={
    name: "satyam gupta",
    Age:28,
    Designation:"Software Engineer",
   
}

let printDerails=function(state,country){
    console.log(this.name+ " "+state+ " "+country)
}



printDerails.call(userDede,"Delhi","India");

let userDede2={
    name: " maar",
    Age:21,
    Designation:"Software Engineer",
    
}

printDerails.call(userDede2,"Delhi","India");

-------------------------Apply-----------------------------
    
    let userDede={
    name: "satyam gupta",
    Age:28,
    Designation:"Software Engineer",
   
}

let printDerails=function(state,country){
    console.log(this.name+ " "+state+ " "+country)
}



printDerails.call(userDede,"Delhi","India");

let userDede2={
    name: " maar",
    Age:21,
    Designation:"Software Engineer",
    
}

//in apply we pass multiple values in as arraylist

printDerails.apply(userDede2,["Delhi","India"]);

-------------------------Bind-----------------------------
    //store the value in variable and print
    
    let userDede={
    name: "satyam gupta",
    Age:28,
    Designation:"Software Engineer",
   
}

let printDerails=function(state,country){
    console.log(this.name+ " "+state+ " "+country)
}



printDerails.call(userDede,"Delhi","India");

let userDede2={
    name: " maar",
    Age:21,
    Designation:"Software Engineer",
    
}





let newfun=printDerails.bind(userDede,"Delhi","Mumbai");
console.log(newfun);
-------------------------------------Memorization-----------------------
    
    //memorization for sum problem

let sum=0;

const calc=(n)=>{
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}


const memoize=(fun)=>{
    let cache={};
    return function(...args){
        let n=args[0];
        if(n in cache){
            console.log("cache");
            return cache[n];
        }else{
            console.log("Calculating first time")
            let res=fun(n);
            cache[n]=res;
            return res;
        }
    }
}


//for 1st time 

console.time();
const efficient =memoize(calc);
console.log(efficient(5));
console.timeEnd();


//for 2nd time 
console.time();
console.log(efficient(5));
console.timeEnd();


-------------------------Debouncing-------------------------------------------------
    
    //function called after mili second,just like when we search laptop on filpkart it's show laptop in search bar
    
    
    // for html file index.html 
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" id="search" onkeyup="BetterFunction()">
    
</body>
<script src="test.js"></script>
</html>
  
    
    //for js file test.js
    let counter=0;

function getData(){
    console.log("fetching" + counter++)
}

function myDebounce(call,d){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);
        setTimeout(()=>{
            call();
        },d);
    }
}


const BetterFunction=myDebounce(getData,1000);

    ---------------------------------------------------Throttling------------------------------


//index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" id="search" >
    <button id="myid" onclick="newfun()">Hello</button>
</body>
<script src="Throt.js"></script>
</html>

//Throt.js

const mythrottle=(fn,d)=>{
    return function(...args){
        document.getElementById("myid").disabled=true;

        setTimeout(()=>{
 fn();
        },d);
    }
}

const newfun = mythrottle(()=>{
    document.getElementById("myid").disabled=false;
    console.log("User Clicked.!!")
},1000);
