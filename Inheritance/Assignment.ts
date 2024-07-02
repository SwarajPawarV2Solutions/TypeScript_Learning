class TouchScreenLaptop {
  ram: string;
  hd: string;
  processor: string;

  constructor(ram: string, hd: string, processor: string) {
    this.ram = ram;
    this.hd = hd;
    this.processor = processor;
  }

  scroll() {
    console.log("Scrolling");
  }

  click() {
    console.log("Clicking");
  }
}

class HpLaptop extends TouchScreenLaptop {
  selfRecovery: boolean;

  selfRecoryEnabled() {
    this.selfRecovery = true;
    console.log("Hp SelfRecovery Enabled");
  }

  scroll() {
    console.log("Hp Scrolling");
  }

  constructor(ram: string,hd: string,processor: string,selfrecovery: boolean) {
    super(ram,hd,processor);
    this.selfRecovery = selfrecovery;
  }
}

class DellLaptop extends TouchScreenLaptop {
  MobileAccess: boolean;

  MobileAccessEnabled() {
    this.MobileAccess = true;
    console.log("MobileAccess Enabled");
  }

  scroll() {
    console.log("Dell Scrolling");
  }

  constructor(ram: string,hd: string,processor: string,MobileAccess: boolean) {
    super(ram, hd, processor);
    this.MobileAccess = MobileAccess;
  }
}

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
