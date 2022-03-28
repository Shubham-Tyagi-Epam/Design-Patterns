class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  doSomething(data: string) {
    console.log(this.strategy.doAlgorithm(data.split("")).join(""));
  }
}

interface Strategy {
  doAlgorithm(state: string[]): string[];
}

class ConcreteStrategyA implements Strategy {
  doAlgorithm(data: string[]): string[] {
    // let d = [9, 2, 3, 2];
    console.log(data);
    // console.log(d.sort());
    return data.sort();
  }
}

class ConcreteStrategyB implements Strategy {
  doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}

function client() {
  let context: Context = new Context(new ConcreteStrategyA());
  context.doSomething("Hello");
  context.setStrategy(new ConcreteStrategyB());
  context.doSomething("Hello");
}

client();
