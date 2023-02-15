class Person {
  constructor(name) {
    this.name = name;
    this.bags = [];
  }

  addBag(bag) {
    console.log("Adding bags...");
    this.bags.push(bag);
  }
}

//Export the Module

module.exports = Person;
