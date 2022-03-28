class Originator {
  private state: string;
  constructor(state: string) {
    this.state = state;
  }
  public save(): Memento {
    return new ConcreteMemento(this.state);
  }
  public doSomething() {
    console.log(`Originator: I am doing something`);
    this.state += " something";
  }
  public restore(memento: Memento) {
    this.state = memento.getState();
    console.log(`Originator: My state changed to : ${this.state}`);
  }
}

interface Memento {
  getState(): string;
  getDate(): string;
  getName(): string;
}

class ConcreteMemento implements Memento {
  private state: string;
  private date: string;
  constructor(state: string) {
    this.state = state;
    this.date = new Date().toISOString().slice(0, 19).replace("T", " ");
  }
  public getState(): string {
    return this.state;
  }
  public getName(): string {
    return ` ${this.state} / ${this.date}`;
  }
  public getDate(): string {
    return this.date;
  }
}

class Caretaker {
  private history: Memento[] = [];
  private originator: Originator;
  constructor(originator: Originator) {
    this.originator = originator;
  }
  public backup() {
    console.log("caretaker: Saving Originator's state...");
    this.history.push(this.originator.save());
  }
  public undo() {
    if (!this.history.length) return;
    console.log("caretaker: Undoing originator's state");
    this.history.pop();
    let memento: Memento = this.history[this.history.length - 1];
    this.originator.restore(memento);
  }
}

const originator = new Originator("Super-duper-super-puper-super");
const caretaker = new Caretaker(originator);
caretaker.backup();

originator.doSomething();
caretaker.backup();

originator.doSomething();
caretaker.backup();

console.log("");

console.log("\n Client Now, let's rollback!\n");
caretaker.undo();

console.log("\nClient: OnceMore\n");
caretaker.undo();
