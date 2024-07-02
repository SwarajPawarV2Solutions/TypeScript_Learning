var Flight = /** @class */ (function () {
    function Flight(FlightNo, from, to) {
        this.FlightNo = FlightNo;
        this.from = from;
        this.to = to;
    }
    Flight.prototype.display = function () {
        console.log(this.FlightNo + " " + this.from + " " + this.to);
    };
    return Flight;
}());
var flight = new Flight(123, "Bangalore", "Swizerland");
flight.display();
