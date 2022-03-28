interface Factory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

class ConcreteFactory1 implements Factory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }
  createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}

class ConcreteFactory2 implements Factory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }
  createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}

interface AbstractProductA {
  functionA(): string;
}

class ConcreteProductA1 implements AbstractProductA {
  public functionA(): string {
    return "function A of Concrete Product A1 called.";
  }
}

class ConcreteProductA2 implements AbstractProductA {
  public functionA(): string {
    return "function A of concrete Product A2 called";
  }
}

interface AbstractProductB {
  functionB(): string;
  colaborator(prodA: AbstractProductA): string;
}

class ConcreteProductB1 implements AbstractProductB {
  public functionB(): string {
    return "function B of concrete product B1 called";
  }
  public colaborator(prodA: AbstractProductA): string {
    return prodA.functionA();
  }
}

class ConcreteProductB2 implements AbstractProductB {
  public functionB(): string {
    return "Function B of Concrete Product B2 is called";
  }
  public colaborator(prodA: AbstractProductA): string {
    return prodA.functionA();
  }
}

function clientCode(factory: Factory) {
  console.log("\n Client is executing it's code");
  let productB: AbstractProductB = factory.createProductB();
  let productA: AbstractProductA = factory.createProductA();
  console.log(productB.functionB());
  console.log(productB.colaborator(productA));
}

let factory: Factory = new ConcreteFactory1();
clientCode(factory);
factory = new ConcreteFactory2();
clientCode(factory);
