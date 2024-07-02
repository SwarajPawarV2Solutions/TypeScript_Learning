var animals:any = ["dog","cat","lion","dog","fish"];
animals.push("Ant");
animals.push(20);

for(var i=0;i<animals.length;i++){
    console.log(animals[i]);
}

//De-Structuring Array

var [a,b,c] = animals;
console.log(a);
console.log(b);
console.log(c);