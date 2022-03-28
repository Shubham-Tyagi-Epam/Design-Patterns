abstract class AbstractClass {
  public templateMethod() {
    this.baseOperation1();
    this.baseOperation2();
    this.baseOperation3();
    this.concreteOperation1();
    this.concreteOperation2();
  }

  public baseOperation1(): void {
    console.log("baseOperation 1 : Done");
  }

  public baseOperation2(): void {
    console.log("baseOperation 2 : Done");
  }

  public baseOperation3(): void {
    console.log("baseOperation 3 : Done");
  }

  protected abstract concreteOperation1(): void;
  protected abstract concreteOperation2(): void;
}

class ConcreteClass1 extends AbstractClass {
  protected concreteOperation1(): void {
    console.log("Concrete Operation 1 (Concrete Class 1) : Done");
  }
  protected concreteOperation2(): void {
    console.log("Concrete Operation 2 (Concrete Class 1) : Done");
  }
}

class ConcreteClass2 extends AbstractClass {
  protected concreteOperation1(): void {
    console.log("Concrete Operation 1 (Concrete Class 2) : Done");
  }
  protected concreteOperation2(): void {
    console.log("Concrete Operation 2 (Concrete Class 2) : Done");
  }
}

class ConcreteClass3 extends AbstractClass {
  protected concreteOperation1(): void {
    console.log("Concrete Operation 1 (Concrete Class 3) : Done");
  }
  protected concreteOperation2(): void {
    console.log("Concrete Operation 2 (Concrete Class 3): Done");
  }
}

function client(abstractClass: AbstractClass) {
  abstractClass.templateMethod();
}

client(new ConcreteClass3());
