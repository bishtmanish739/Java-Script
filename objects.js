//Array in object 
let places=['pune','delhi','mysore'];
console.log(places);
console.log(places[0]);
places[3]='kolkata';
places.push('Nainital')
console.log(places);
places.pop();
console.log(places);
console.log(places.indexOf('mysore'));
places.push(100)
// remove next 2 element from index 1 
places.splice(1,2);
console.log(places);
places.forEach((element,i) => {
    console.log(element,i) 
});

// console.log(places)
//map function 
let maparray=places.map((element)=>{
    if(typeof element ==='string'){
        return element.toUpperCase();
    }
    else{
        return element;
    }
})

console.log(maparray);