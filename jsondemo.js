let empObj={
    name:'Jhon',
    empNumber:1001,
    emailid:"manish@123.gmail.com"
}
let empObj1='{ "name":"Jhon", "empNumber":1001," emailid":"manish@123.gmail.com"}'
let empObj2={ "name":"Jhon", "empNumber":1001," emailid":"manish@123.gmail.com"}
console.log(empObj)
console.log(empObj1)
console.log(empObj2)
console.log('Json object',JSON.parse(empObj1))

let o={
    name:"manish",
    f:function add(){
        return 2+3;
    }
}
//JSON object contain key value pair only 
// whereas object litteral can contain funtion as well
let jsonstring=JSON.stringify(o);
console.log(jsonstring);
console.log(JSON.parse(jsonstring));