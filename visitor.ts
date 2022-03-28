interface Component {
  accept(vis: Visitor): void;
}

class ComponentA {
  private x = 2;
  public featureA() {
    return this.x + 2;
  }
  public accept(vis: Visitor) {
    vis.doComponentA(this);
    // console.log(1);
  }
}

class ComponentB {
  private y = 3;
  public featureB() {
    return this.y + 3;
  }
  public accept(vis: Visitor) {
    vis.doComponentB(this);
    // console.log(1);
  }
}

interface Visitor {
  doComponentA(componentA: ComponentA): void;
  doComponentB(componentB: ComponentB): void;
}

class VisitorA implements Visitor {
  doComponentA(componentA: ComponentA): void {
    console.log(componentA.featureA() + 1);
  }
  doComponentB(componentB: ComponentB): void {
    console.log(componentB.featureB() + 1);
  }
}

class VisitorB implements Visitor {
  doComponentA(componentA: ComponentA): void {
    console.log(componentA.featureA() + 10);
  }
  doComponentB(componentB: ComponentB): void {
    console.log(componentB.featureB() + 10);
  }
}

function clientCode(vis: Visitor, compList: Component[]) {
  for (let comp of compList) {
    comp.accept(vis);
  }
}

let componentA = new ComponentA();
let componentB = new ComponentB();
let compList: Component[] = [];

compList.push(componentA);
compList.push(componentB);
let vis: Visitor = new VisitorA();
vis = new VisitorB();
clientCode(vis, compList);
