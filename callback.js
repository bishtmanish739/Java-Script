// function  display() {
//     console.log("Good morning")
// }
// console.log("before");
// setTimeout(display, 300);
// console.log("after");


let value;
function check(val) {
    console.log(val);
    for(let i=0;i<1000000000;i++){}
for(let i=0;i<100000000;i++){}
for(let i=0;i<100000000;i++){}
for(let i=0;i<100000000;i++){}
for(let i=0;i<100000000;i++){}
for(let i=0;i<100000000;i++){}
for(let i=0;i<100000000;i++){}
for(let i=0;i<100000000;i++){}
for(let i=0;i<100000000;i++){}
for(let i=0;i<100000000;i++){}
for(let i=0;i<100000000;i++){}
for(let i=0;i<100000000;i++){}
for(let i=0;i<100000000;i++){}
for(let i=0;i<100000000;i++){}
for(let i=0;i<100000000;i++){}
for(let i=0;i<100000000;i++){}
for(let i=0;i<100000000;i++){}
for(let i=0;i<100000000;i++){}
for(let i=0;i<100000000;i++){}
for(let i=0;i<100000000;i++){}
for(let i=0;i<100000000;i++){}
for(let i=0;i<100000000;i++){}
for(let i=0;i<100000000;i++){}
for(let i=0;i<100000000;i++){}
    console.log("inside check");
}
function getTrip() {
    setTimeout(function () {
        value = "Let's go to Trip";
        console.log("get trip 0");
       
    }, 2);
}

function getTrip1() {
    setTimeout(function () {
        value = "Let's go to Trip";
        console.log("get trip 1");
    }, 3000);
}
getTrip1();
getTrip();

check(value);