class Singleton1 {
  private static instance: Singleton1 = new Singleton1();
  private constructor() {}
  public static getInstance(): Singleton1 {
    return Singleton1.instance;
  }
}

class Singleton2 {
  private static instance: Singleton2;
  private constructor() {}
  public static getInstance() {
    if (!this.instance) this.instance = new Singleton2();
    return this.instance;
  }
}

function clientCode() {
  let s1 = Singleton2.getInstance();
  let s2 = Singleton2.getInstance();
  if (s1 == s2) console.log("Singleton work");
  else console.log("Singleton does not work");
}

clientCode();
