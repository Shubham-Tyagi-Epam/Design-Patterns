abstract class Creator {
  public abstract factoryMethod(): Product;
}

class ConcreteCreator1 implements Creator {
  public factoryMethod(): Product {
    return new Product1();
  }
}

class ConcreteCreator2 implements Creator {
  public factoryMethod(): Product {
    return new Product2();
  }
}

interface Product {
  operation(): string;
}

class Product1 implements Product {
  public operation(): string {
    return "Operation of Product 1 is being implemented";
  }
}

class Product2 implements Product {
  public operation(): string {
    return "Operation of product 2 is being implemented";
  }
}

function clientCode(creator: Creator) {
  let product: Product = creator.factoryMethod();
  console.log(product.operation());
}

console.log("Clientcode given the concreate creator 1");
clientCode(new ConcreteCreator1());
console.log("Clientcode given the concreate creator 2");
clientCode(new ConcreteCreator2());
