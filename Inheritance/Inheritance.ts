class BMW {
  make: string;
  model: string;
  year: string;

  constructor(make: string, model: string, year: string) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  commonEngineFunc() {
    console.log("Common Function");
  }

  start() {
    console.log("Start");
  }

  stop() {
    console.log("Stop");
  }
}

class ThreeSeries extends BMW {
  cruiseControlEnabled: boolean;

  cruiseControl() {
    this.cruiseControlEnabled = true;
    console.log("Crusing");
  }
  // for Overriding
  start() {
    console.log("Button Start");
  }

  stop() {
    console.log("Button Stop");
  }

  constructor(
    make: string,
    model: string,
    year: string,
    cruiseControlEnabled: boolean
  ) {
    super(make, model, year);
    this.cruiseControlEnabled = cruiseControlEnabled;
  }
}

class FiveSeries extends BMW {
  parkingControlEnabled: boolean;

  parkingAssist() {
    this.parkingControlEnabled = true;
    console.log("Parked");
  }

  // Overriding
  start() {
    console.log("Remote Start");
  }

  stop() {
    console.log("Remote Stop");
  }

  constructor(
    make: string,
    model: string,
    year: string,
    parkingControlEnabled: boolean
  ) {
    super(make, model, year);
    this.parkingControlEnabled = parkingControlEnabled;
  }
}
var threeseries = new ThreeSeries("BMW", "328i", "2018", false);

console.log(threeseries.cruiseControlEnabled);
console.log(threeseries.make);
console.log(threeseries.model);
console.log(threeseries.year);
threeseries.commonEngineFunc();
threeseries.start();
threeseries.stop();
threeseries.cruiseControl();

var fiveseries = new FiveSeries("BMW", "538i", "2018", false);

console.log(fiveseries.parkingControlEnabled);
console.log(fiveseries.make);
console.log(fiveseries.model);
console.log(fiveseries.year);
fiveseries.commonEngineFunc();
fiveseries.start();
fiveseries.stop();
fiveseries.parkingAssist();
