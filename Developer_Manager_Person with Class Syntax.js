/* --------------------------- Person constructor --------------------------- */
let Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
  }
};

class Manager extends Person {
  constructor(name, age, managed) {
    super(name, age);
    this.managed = managed;
  }

  greet() {
    const managedNames = this.managed.map((dev) => dev.name).join(",");
    console.log(
      `Hi, I'm ${this.name} and I'm ${this.age} years old\nI manage ${managedNames}`
    );
  }
}

const Developer = class extends Person {
  constructor(name, age, skillest) {
    super(name.age);
    this.skillest = skillest;
  }
  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
    if (this.skillset.length > 0) {
      console.log(`I know ${this.skillset.join(",")}`);
    }
  }
};
