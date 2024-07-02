  // Creating class
  class Passenger{
    firstName:string;
    lastName:string;
    frequentFlyerNo:number;
 
    //Constructor
    constructor(firstName:string,lastName:string,frequentFlyerNo:number){
       this.firstName  = firstName;
       this.lastName = lastName;
       this.frequentFlyerNo = frequentFlyerNo;
    }

    display(){
        console.log(this.firstName+" "+this.lastName+" "+this.frequentFlyerNo);
    }
}

//Creating Objects

var passenger1 = new Passenger("Swaraj","Pawar",100);
 passenger1.display()
var passenger2 = new Passenger("Abhishek","Singh",200);
passenger2.display()
var passenger3 = new Passenger("Mayank","Jain",300);
passenger3.display()

for(let item in passenger1){
    if(passenger1[item]instanceof Function){
        continue;
        }
    else{
            console.log(item);
        console.log(passenger1[item]);
        }
    }
