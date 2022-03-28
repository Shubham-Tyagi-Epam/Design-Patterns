class Facade {
  private subsystem1: Subsystem1;
  private subsystem2: Subsystem2;

  constructor(subsystem1: Subsystem1 = null, subsystem2: Subsystem2 = null) {
    this.subsystem1 = subsystem1 || new Subsystem1();
    this.subsystem2 = subsystem2 || new Subsystem2();
  }

  public operation() {
    console.log("All subsytem initialization started don by facade : ");
    this.subsystem1.operation1();
    this.subsystem2.operation1();
    console.log("The correct order which is managed by facade class :");
    this.subsystem1.operationN();
    this.subsystem2.operationZ();
  }
}

class Subsystem1 {
  public operation1() {
    console.log("Subsystem1 Initialized");
  }

  public operationN() {
    console.log("OpearationN of Subsystem1 called");
  }
}

class Subsystem2 {
  public operation1() {
    console.log("Subsystem2 Initialized");
  }
  public operationZ() {
    console.log("OperationZ of subsystem2 called");
  }
}

function clientCode(f: Facade) {
  f.operation();
}

let s1 = new Subsystem1();
let s2 = new Subsystem2();
let f = new Facade(s1, s2);
clientCode(f);
