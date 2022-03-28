class Context {
  state: State;
  constructor(state: State) {
    this.transitionTo(state);
  }
  public transitionTo(state: State) {
    console.log("Transitioning to a different state");
    this.state = state;
    this.state.setContext(this);
  }
  public request1() {
    this.state.handle1();
  }
  public request2() {
    this.state.handle2();
  }
}

abstract class State {
  public context: Context;
  public setContext(context: Context) {
    this.context = context;
  }
  public abstract handle1(): any;
  public abstract handle2(): void;
}

class ConcreteStateA extends State {
  public handle1(): void {
    console.log("handle 1 of Concrete State A called");
    this.context.transitionTo(new ConcreteStateB());
  }
  public handle2(): void {
    console.log("Handle 2 of Concrete State A called");
  }
}

class ConcreteStateB extends State {
  public handle1(): void {
    console.log("handle 1 of Concrete State B called");
  }
  public handle2(): void {
    console.log("handle 2 of Concrete State B called");
    this.context.transitionTo(new ConcreteStateA());
  }
}

function client() {
  let context: Context = new Context(new ConcreteStateA());
  context.request2();
  context.request1();
  context.request1();
}

client();
