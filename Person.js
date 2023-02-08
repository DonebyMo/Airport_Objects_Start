class Person {
  constructor(name, bags) {
    this.name = name;
    this.bags = [bags];
  }

  addBag() {
    console.log("Adding bags...");
  }
}

//Export the Module

module.exports = Person;
