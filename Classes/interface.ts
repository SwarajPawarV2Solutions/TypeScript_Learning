interface IFlight{
   FlightNo:number;
   from:string;
   to:string;
   display():void
}

class Flight implements IFlight{
   FlightNo:number;
   from:string;
   to:string;
   

   constructor(FlightNo:number,from:string,to:string){
        this.FlightNo = FlightNo;
        this.from = from;
        this.to = to;
   }

   display(){
    console.log(this.FlightNo+" "+this.from+" "+this.to);
    
   }
}

var flight = new Flight(123,"Bangalore","Swizerland");
flight.display();