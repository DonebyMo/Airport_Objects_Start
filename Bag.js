class Bag {
  constructor(weight) {
    if (!weight) {
      throw new Error("bag needs weight");
    }

    this.weight = weight;
  }
  // Include constructor Method with the following property:
  // 1. Weight
  //1a. Should handle an exception in case user adds no weight and throw an error.
}

module.exports = Bag;

//Export the module
