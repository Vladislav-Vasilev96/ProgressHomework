let devFactory = function (name, salary) {
  let dev_obj = {
    name,
    salary,
    getSalary: function () {
      return this.salary;
    },
    increaseSalary: function (incrValue, pass) {
      if (pass == "abracadabra") {
        this.salary += incrValue;

      }
    },
  };
  return dev_obj
};

let dev1 = devFactory("Peter", 1000);
let dev2 = devFactory("Maria", 1200);

console.log(`${dev1.name} salary is ${dev1.getSalary()}`);
console.log(`${dev2.name} salary is ${dev2.getSalary()}`);

dev1.increaseSalary(500, "abracadabra");
dev2.increaseSalary(100, "123");

console.log(`${dev1.name} salary after promotion is ${dev1.getSalary()}`);
console.log(`${dev2.name} salary after promotion is ${dev2.getSalary()}`);

