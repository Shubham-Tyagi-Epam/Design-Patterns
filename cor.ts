interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string;
}

abstract class AbstractHandler {
  private next: Handler;

  public setNext(handler: Handler) {
    this.next = handler;
    return handler;
  }

  public handle(request: string): string {
    if (this.next) {
      return this.next.handle(request);
    }
    return null;
  }
}

class MonkeyHandler extends AbstractHandler {
  public handle(request: string) {
    if (request == "banana") {
      return `Monkey: I'll eat the ${request}`;
    }
    return super.handle(request);
  }
}

class SquirrelHandler extends AbstractHandler {
  public handle(request: string) {
    if (request == "nut") {
      return `Squirrel: I'll eat the ${request}`;
    }
    return super.handle(request);
  }
}

class DogHandler extends AbstractHandler {
  public handle(request: string) {
    if (request == "MeatBall") {
      return `Dog: I'll eat the ${request}`;
    }
    return super.handle(request);
  }
}

function clientCode(handler: Handler) {
  console.log("Who wants a MeatBall");
  let result = monkey.handle("MeatBall");
  if (result) console.log(result);
  else console.log("Food left untouched");
}

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

clientCode(monkey);
