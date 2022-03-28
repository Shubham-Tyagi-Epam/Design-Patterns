abstract class Component {
  // protected parent: Component;

  // public getParent(): Component {
  //   return this.parent;
  // }

  // public setParent(component: Component) {
  //   this.parent = component;
  // }

  // public isComposite(): boolean {
  //   return false;
  // }

  public add(component: Component) {}
  public remove(component: Component) {}
  public abstract operation(): string;
}

class Leaf extends Component {
  public operation(): string {
    return "Leaf";
  }
}

class Composite extends Component {
  children: Component[] = [];

  public add(component: Component): void {
    this.children.push(component);
  }

  public remove(component: Component): void {
    let componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);
  }

  public operation(): string {
    let result: string[] = [];
    for (let child of this.children) {
      result.push(child.operation());
    }
    return `Branch(${result.join("+")})`;
  }
}

function clientCode(component: Component) {
  console.log(`RESULT: ${component.operation()}`);
}

const simple = new Leaf();
console.log("Client: I've got a simple component:");
clientCode(simple);
console.log("");

const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Composite();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
console.log("Client: Now I've got a composite tree:");
clientCode(tree);
console.log("");
