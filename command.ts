interface Command {
  execute(): void;
}

class Command1 implements Command {
  private logic: BLogic;
  constructor(logic: BLogic) {
    this.logic = logic;
  }
  execute(): void {
    console.log("Command1 is called");
    this.logic.implementLogic();
  }
}

class Command2 implements Command {
  private logic: BLogic;
  constructor(logic: BLogic) {
    this.logic = logic;
  }
  execute(): void {
    console.log("Command2 is called");
    this.logic.implementLogic();
  }
}

interface BLogic {
  implementLogic(): void;
}

class BLogic1 implements BLogic {
  implementLogic() {
    console.log("Logic 1 is executed");
  }
}

class BLogic2 implements BLogic {
  implementLogic() {
    console.log("Logic 2 is executed");
  }
}

class Invoker {
  public button1: Command;
  public button2: Command;

  pressButton1() {
    this.button1.execute();
  }

  pressButton2() {
    this.button2.execute();
  }
}

function clientCode(invoker: Invoker) {
  invoker.pressButton1();
  invoker.pressButton2();
}

let invoker: Invoker = new Invoker();
invoker.button1 = new Command1(new BLogic1());
invoker.button2 = new Command2(new BLogic2());

clientCode(invoker);
