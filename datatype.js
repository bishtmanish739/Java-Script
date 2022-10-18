console.log(5+"4");
let a=5;
let t="a";
let b;
b=19.0;
console.log(a+b);
// console.log(a**t); NaN
let boolean=true;
console.log(boolean+a);
// typeof is a operator 
console.log(typeof(a));//number
console.log(typeof(b));
let w;
console.log(typeof(w)); // undifined 

let object={
    // key in double quote not mandatory
    "name":"abc",
    "age":90
}
let object1={
    // key in double quote not mandatory
    name:"abc",
    age:90
}
console.log(object);
console.log(object1);

let nullobj=null;

console.log(typeof(nullobj));  // null is a object
// number + string =concat
// number + boolean= sum of number + 0/1
// number+ undefined =NaN


5>4 ?console.log("abc"):console.log(  "hdfa"); // ternary operator 
//conditional statement 
if(5>6){
    console.log("first");
}
else{
    console.log("second");
}
let choice='a';
switch(choice){
    default:
        console.log("default");
       
    choice=='b'
    console.log("b");
    break;
    choice=='c'
    console.log("c");
    break;
}