class Target {
  // this is the format of data that the app understand.
  public request(): string {
    return "Target: The default target behaviour";
  }
}

class Adapter extends Target {
  // this is the adapter that makes your app interact with the external library.
  public a: Adaptee;
  constructor(a: Adaptee) {
    super();
    this.a = a;
  }
  public request(): string {
    let result = this.a.specificRequest().split("").reverse().join("");
    return result;
  }
}

class Adaptee {
  // this is the external library with which you want to communicate.
  public specificRequest(): string {
    return ".eetpadA eht fo roivaheb laicepS";
  }
}

function client(target: Target) {
  // this is your app
  console.log(target.request());
}

console.log("Client: I can work with the target");
client(new Target());

console.log(
  "Client: I cannot work with the adaptee it has a weird interface....see...."
);
let adaptee: Adaptee = new Adaptee();
console.log(`Adaptee : ${adaptee.specificRequest()}`);

console.log("Adapter: Client I can help you with it");
client(new Adapter(adaptee));
