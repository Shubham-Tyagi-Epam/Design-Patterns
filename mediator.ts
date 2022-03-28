interface Mediator {
  notify(sender: BaseComponent, event: string);
}

class ConcreteMediator implements Mediator {
  private c1: Component1;
  private c2: Component2;

  constructor(c1: Component1, c2: Component2) {
    this.c1 = c1;
    this.c2 = c2;
    this.c1.setMediator(this);
    this.c2.setMediator(this);
  }
  public notify(sender: BaseComponent, event: string) {
    if (event == "A") {
      this.c2.doC();
    } else if (event == "B") {
      this.c1.doA();
      this.c2.doD();
    }
  }
}

class BaseComponent {
  protected mediator: Mediator;
  constructor() {
    this.mediator = null;
  }
  setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }
}

class Component1 extends BaseComponent {
  doA() {
    console.log("A event is called");
    mediator.notify(this, "A");
  }
  doB() {
    console.log("B event is called");
    mediator.notify(this, "B");
  }
}

class Component2 extends BaseComponent {
  doC() {
    console.log("C event is called");
    mediator.notify(this, "C");
  }
  doD() {
    console.log("D event is called");
    mediator.notify(this, "D");
  }
}

let c1: Component1 = new Component1();
let c2: Component2 = new Component2();

let mediator: Mediator = new ConcreteMediator(c1, c2);

c1.doA();
// c1.doB();
