class Fruit {
    name = "";
    color = "";

    constructor(name=this.name) {
        this.name = name;
        console.log("Fruit constructor");
    }

    info() {
        console.log(`this fruit is:${this.name}`);
    }
}

class Apple extends Fruit {
    name = "apple";
    color = "red";

    #apple_secret = "apple secret";

    constructor() {
        super();
        console.log("Apple constructor");
    }


    info() {
        //super.info();
        console.log(`this fruit is:${this.name}, color is ${this.color}`);
    }
}

const apple = new Apple();
apple.info();
apple.#apple_secret;
