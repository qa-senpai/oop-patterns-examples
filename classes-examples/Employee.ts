class Employee {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  work() {
    return `${this.name} working...`;
  }
  greet() {
    return `Hey, it's me ${this.name}`;
  }
}

class Developer extends Employee {
  work(): string {
    return `${this.name} working on code writing...`;
  }
}

class Tester extends Employee {
  work(): string {
    return `${this.name} working on test cases...`;
  }
}

class Designer extends Employee {
  work(): string {
    return `${this.name} working on design document...`;
  }
}

const dev = new Developer("Alex");
const qa = new Tester("Paule");
const designer = new Designer("Jane");

console.log(dev.work());
console.log(qa.work());
console.log(designer.work());

console.log(dev.greet());
console.log(qa.greet());
console.log(designer.greet());
