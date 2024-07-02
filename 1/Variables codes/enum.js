var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
console.log(Gender.male); //  0   this will give its index number as its output
console.log(Gender.female); //  1   this will give its index number as its output
// If we want to access data then 
console.log(Gender[0]);
console.log(Gender[1]);
var Weekends;
(function (Weekends) {
    Weekends[Weekends["saturday"] = 6] = "saturday";
    Weekends[Weekends["sunday"] = 7] = "sunday";
})(Weekends || (Weekends = {}));
console.log(Weekends[6]);
console.log(Weekends[7]);
