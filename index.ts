console.log("I am a Typescript Developer");
let apples:number=5;
console.log(apples);
let speed:string='fast';
console.log(speed);

let hasName:boolean=true;
let nothibgMuch:null=null;
let unde:undefined=undefined;

console.log(hasName,nothibgMuch,unde);

let now:Date=new Date();
console.log(now);

//Array
let colors:string[]=['red','green','blue'];
let numbers:number[]=[100,200,300,400,600];
let isBool:boolean[]=[true,false,true,true];
console.log(colors);
console.log(numbers);
console.log(isBool);

class Car{
  
}

let car:Car=new Car();
//object Literals


let point:{x:number,y:number}={
    x:10,
    y:20
}

let MyBio:{firstName:string,lastName:string,age:number,qualification:string,Profession:string}={
 firstName:"Rifat",
 lastName:"Shahriar",
 age:25,
 qualification:"Bsc in IT",
 Profession:"Software Engineer"
}
console.log(MyBio);

//Function
const LogNumber:(i:number)=>void=(i:number)=>{
 console.log(i);
}

const addsum:(a:number,b:number)=>void=(a:number,b:number)=>{
 return a+b;
}
console.log(addsum(10,20));

//when to use annotations
//1.Function that returs the 'any type'

const json='{"x":10,"y":20,"z":20}'
const coordinate:{x:number,y:number,z:number}=JSON.parse(json);
console.log(coordinate);

//any
//2)When we declare a variable on one line
//and initalizete ite later
let words=['red','green','blue'];
let foundWord:boolean;
for(let i=0;i<words.length;i++){
    if(words[i]==='green'){
        foundWord=true;
    }
}

//variable whose  type can not be inferred correctly
let number_1:number[];
number_1=[10,-78,-9,56];
let numberAboveZero:boolean|number=false;

for(let i=0;i<number_1.length;i++){
    if(number_1[i]>0){
      numberAboveZero=number_1[i] ; 
    }
}














