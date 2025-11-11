//basics of OOP

//class --> template object
//declare a class --> the name of the class is capitalised by convention

class Biscuit {
  //this constructor will build instances of the Biscuit class
  //in the brackets of our constructor, we will add the properties for our Biscuit
  //the this keyword adds a reference to the specific Biscuit instance we will be building --> by adding the this keyword, we are making this constructor reusable
  constructor(biscuitName, biscuitFlavour, biscuitCrunchiness) {
    (this.name = biscuitName),
      (this.flavour = biscuitFlavour),
      (this.crunchiness = biscuitCrunchiness);
  }

  //in our class, we can use declare methods
  voiceline() {
    console.log(
      `The ${this.name} has an amazing ${this.flavour} flavour, and a crunchiness level of ${this.crunchiness}`
    );
  }
}

//instantiate objects based on the Biscuit class
//the new keyword creates an instance of the Biscuit class
const custardCream = new Biscuit("custard cream", "vanilla", 5);
console.log(custardCream);

// const custardCream = {
//   name: "custard cream",
//   flavour: "vanilla",
//   crunchiness: 5,
// };

const bourbon = new Biscuit("bourbon", "chocolate", 6);
console.log(bourbon);

//we can use dot notation to access object properties and the methods
custardCream.voiceline();
bourbon.voiceline();
console.log(custardCream.flavour);

//create a sub-class --> inherit some properties from its parent

class Cookie extends Biscuit {
  constructor(biscuitName, biscuitFlavour, biscuitCrunchiness, cookiePrice) {
    //the super operator inherits the properties we want to use from Biscuit
    super(biscuitName, biscuitFlavour, biscuitCrunchiness);
    //I can also add new properties for the Cookie class
    this.price = cookiePrice;
  }

  slogan() {
    console.log(`${this.name} is the best cookie in the world`);
  }
}

const chocolateChip = new Cookie("chocolate chip", "chocolate", 3, 1);
console.log(chocolateChip);
chocolateChip.slogan();
chocolateChip.voiceline();
