var animals = ["dog", "cat", "lion", "dog", "fish"];
animals.push("Ant");
animals.push(20);
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
//De-Structuring Array
var a = animals[0], b = animals[1], c = animals[2];
console.log(a);
console.log(b);
console.log(c);
