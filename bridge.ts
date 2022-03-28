class Abstraction {
  protected implementation: Implementation;
  constructor(implementation: Implementation) {
    this.implementation = implementation;
  }
  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `Abstraction Base Operation : ${result}`;
  }
}

interface Implementation {
  operationImplementation(): string;
}

class ConcreteImplementationA implements Implementation {
  public operationImplementation(): string {
    return "ConcreteImplementationA : Here is the result on the platform A";
  }
}

class ConcreteImplementationB implements Implementation {
  public operationImplementation(): string {
    return "ConcreteImplementationB : Here is the result on the platform B";
  }
}

function client(abstraction: Abstraction) {
  console.log(abstraction.operation());
}

let implementation: Implementation = new ConcreteImplementationA();
let abstraction: Abstraction = new Abstraction(implementation);
client(abstraction);

implementation = new ConcreteImplementationB();
abstraction = new Abstraction(implementation);
client(abstraction);
