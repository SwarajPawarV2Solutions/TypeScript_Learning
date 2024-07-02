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
var TouchScreenLaptop = /** @class */ (function () {
    function TouchScreenLaptop(ram, hd, processor) {
        this.ram = ram;
        this.hd = hd;
        this.processor = processor;
    }
    TouchScreenLaptop.prototype.scroll = function () {
        console.log("Scrolling");
    };
    TouchScreenLaptop.prototype.click = function () {
        console.log("Clicking");
    };
    return TouchScreenLaptop;
}());
var HpLaptop = /** @class */ (function (_super) {
    __extends(HpLaptop, _super);
    function HpLaptop(ram, hd, processor, selfrecovery) {
        var _this = _super.call(this, ram, hd, processor) || this;
        _this.selfRecovery = selfrecovery;
        return _this;
    }
    HpLaptop.prototype.selfRecoryEnabled = function () {
        this.selfRecovery = true;
        console.log("Hp SelfRecovery Enabled");
    };
    HpLaptop.prototype.scroll = function () {
        console.log("Hp Scrolling");
    };
    return HpLaptop;
}(TouchScreenLaptop));
var DellLaptop = /** @class */ (function (_super) {
    __extends(DellLaptop, _super);
    function DellLaptop(ram, hd, processor, MobileAccess) {
        var _this = _super.call(this, ram, hd, processor) || this;
        _this.MobileAccess = MobileAccess;
        return _this;
    }
    DellLaptop.prototype.MobileAccessEnabled = function () {
        this.MobileAccess = true;
        console.log("MobileAccess Enabled");
    };
    DellLaptop.prototype.scroll = function () {
        console.log("Dell Scrolling");
    };
    return DellLaptop;
}(TouchScreenLaptop));
var hp = new HpLaptop("16gb", "1tb", "i5", true);
console.log(hp.selfRecoryEnabled());
console.log(hp.ram);
console.log(hp.hd);
console.log(hp.processor);
hp.scroll();
var dell = new DellLaptop("16gb", "1tb", "i7", true);
console.log(dell.MobileAccessEnabled());
console.log(dell.ram);
console.log(dell.hd);
console.log(dell.processor);
dell.scroll();
