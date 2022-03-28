interface Prototype {
  clone(): MyClass;
}

class MyClass implements Prototype {
  public feild: number[];
  constructor(arr: number[]) {
    this.feild = arr;
  }
  clone(): MyClass {
    // return Object.assign({}, this);      // Shallow Copy
    return JSON.parse(JSON.stringify(this)); // Deep Copy
  }
}

let c1: MyClass = new MyClass([1, 2, 3]);
let c2: MyClass = c1.clone();
c2.feild[1] = 10;
console.log(c1.feild);
console.log(c2.feild);
