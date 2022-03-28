interface Builder {
  productPartA(a: number): Builder;
  productPartB(b: number): Builder;
  productPartC(c: number): Builder;
  getProduct(): Product;
}

class ConcreteBuilder implements Builder {
  private product: Builder;
  a: number = 0;
  b: number = 0;
  c: number = 0;
  productPartA(a: number): Builder {
    this.a = a;
    return this;
  }
  productPartB(b: number): Builder {
    this.b = b;
    return this;
  }
  productPartC(c: number): Builder {
    this.c = c;
    return this;
  }
  getProduct(): Product {
    return new Product(this.a, this.b, this.c);
  }
}

class Product {
  a: number;
  b: number;
  c: number;
  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  public listParts(): void {
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
  }
}

function clientCode(builder: Builder) {
  let p: Product = builder.productPartB(5).productPartA(2).getProduct();
  p.listParts();
}

clientCode(new ConcreteBuilder());
