var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BMW = /** @class */ (function () {
    function BMW(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    BMW.prototype.commonEngineFunc = function () {
        console.log("Common Function");
    };
    BMW.prototype.start = function () {
        console.log("Start");
    };
    BMW.prototype.stop = function () {
        console.log("Stop");
    };
    return BMW;
}());
var ThreeSeries = /** @class */ (function (_super) {
    __extends(ThreeSeries, _super);
    function ThreeSeries(make, model, year, cruiseControlEnabled) {
        var _this = _super.call(this, make, model, year) || this;
        _this.cruiseControlEnabled = cruiseControlEnabled;
        return _this;
    }
    ThreeSeries.prototype.cruiseControl = function () {
        this.cruiseControlEnabled = true;
        console.log("Crusing");
    };
    // for Overriding
    ThreeSeries.prototype.start = function () {
        console.log("Button Start");
    };
    ThreeSeries.prototype.stop = function () {
        console.log("Button Stop");
    };
    return ThreeSeries;
}(BMW));
var FiveSeries = /** @class */ (function (_super) {
    __extends(FiveSeries, _super);
    function FiveSeries(make, model, year, parkingControlEnabled) {
        var _this = _super.call(this, make, model, year) || this;
        _this.parkingControlEnabled = parkingControlEnabled;
        return _this;
    }
    FiveSeries.prototype.parkingAssist = function () {
        this.parkingControlEnabled = true;
        console.log("Parked");
    };
    // Overriding
    FiveSeries.prototype.start = function () {
        console.log("Remote Start");
    };
    FiveSeries.prototype.stop = function () {
        console.log("Remote Stop");
    };
    return FiveSeries;
}(BMW));
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
