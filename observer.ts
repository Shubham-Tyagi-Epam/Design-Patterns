interface Subject {
  addObserver(obs: Observer): void;
  removeObserver(obs: Observer): void;
  notifyAll(): void;
}

class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  public state: number;

  constructor(state: number) {
    this.state = state;
  }

  addObserver(obs: Observer): void {
    let index = this.observers ? this.observers.indexOf(obs) : -1;
    if (index != -1) {
      console.log("Observer already added");
    } else {
      console.log("Adding the observer");
      this.observers.push(obs);
    }
  }

  removeObserver(obs: Observer): void {
    let index = this.observers ? this.observers.indexOf(obs) : -1;
    if (index != -1) {
      console.log("Removing the observer");
      this.observers.splice(index, 1);
    } else console.log("Observer already removed");
  }

  changeState(state: number): void {
    this.state = state;
    this.notifyAll();
  }

  notifyAll(): void {
    for (let i in this.observers) {
      this.observers[i].update(this);
    }
  }
}

interface Observer {
  update(subject: Subject): void;
}

class ConcreteObserverA implements Observer {
  update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.state < 3) {
      console.log("Concrete Observer A reacted to the event");
    }
  }
}

class ConcreteObserverB implements Observer {
  update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.state >= 2) {
      console.log("Concrete Observer B reacted to the event");
    }
  }
}
function client(): void {
  let sub = new ConcreteSubject(2);
  let obsA = new ConcreteObserverA();
  let obsB = new ConcreteObserverB();
  sub.addObserver(obsA);
  sub.addObserver(obsB);
  sub.changeState(2);
}
let sub = new ConcreteSubject(0);
client();
