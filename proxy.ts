interface Subject {
  request(): void;
}

class RealSubject implements Subject {
  public request(): void {
    console.log("Real subject handling the request");
  }
}

class ProxySubject implements Subject {
  private realSubject: RealSubject;

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  public request(): void {
    console.log("Request handle by proxy object");
    if (this.checkAccess()) this.realSubject.request();
    this.logAccess();
  }

  private checkAccess() {
    console.log("Checking the access of the real subject");
    return true;
  }

  private logAccess() {
    console.log("logging time of the request");
  }
}

function clientCode(subject: Subject) {
  subject.request();
}

let realSubject: Subject = new RealSubject();
let proxySubject: Subject = new ProxySubject(realSubject);

clientCode(realSubject);
clientCode(proxySubject);
