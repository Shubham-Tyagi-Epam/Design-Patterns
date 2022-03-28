interface Componenet {
  operation(): string;
}

class ConcreteComponent implements Componenet {
  public operation(): string {
    return "Concrete Component";
  }
}

class Decorator implements Componenet {
  public component: Componenet;
  constructor(component: Componenet) {
    this.component = component;
  }
  public operation(): string {
    return `${this.component.operation()}`;
  }
}

class concreteDecoratorA extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

class concreteDecoratorB extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}

function clientCode(component: Componenet) {
  console.log(component.operation());
}

let simple: ConcreteComponent = new ConcreteComponent();

let decorator1: Componenet = new concreteDecoratorA(simple);

let decorator2: Componenet = new concreteDecoratorB(decorator1);

clientCode(simple);
clientCode(decorator2);
