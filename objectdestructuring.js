let object={
    name:"manish",
    class:12,
    age:17
}

let{name,...x}=object;
console.log(name)
console.log(name,x)