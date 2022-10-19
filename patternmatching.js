//it is also known as regex expression
/*
How to write RegExp
end with "a" can be written as a$
start with 'a' can be written as ^a
accept [a-z] a to z
accept 5 fixed length {5}
accept lowecase and uppercase [a-zA-Z]{5} exactly 5
accept lowecase and uppercase [a-zA-Z]{5,} at least 5
^[a-z0-9]{5}[A-Z]+$ means 5 a-z+ 0-9 and atleast 1 A-Z
. match any character

how to match single .  ===>
[.]{1} 1 dot
\.
\$ to match 
\s to match space
\.com$ end with .com
\.(com|in|org)$ end with com in org
^[^0-9][a-zA-Z0-9] not accept 0-9 first



quatifier=>
* any number of time
+ atleast 1 to infinuty
no quantifier mean only 1 character we are expecting 
? mean it is optional 





*/

function validateString(name){
   if(name.match(/[a-zA-z]{5,15}/)){
return true;
   }
   return false;
}
function validatePin(pin){
    if(pin.match(/^[0-9]{5}$/)){
 return true;
    }
    return false;
 }
 let reg=/^[0-9]{5}$/
console.log(validateString("dfafsd"))
console.log(validatePin('a12345'));
console.log(reg.test("12345"))
// console.log(1234_5.match(/^[0-9]{5}$/));

