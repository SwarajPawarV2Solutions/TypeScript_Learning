var student = {
  firstname:"John",
  lastname: "Bailey",
  Marks: 90
}

console.log(student.firstname);
console.log(student.Marks);

//Printing data using for-in Loop

for(var item in student){
    console.log(student[item]);
}

// De-structuring of Objcts

var{firstname,lastname} = student;
console.log(firstname +" "+lastname);


