export class SimpleCoffee {
    getCost() { return 10; }
    getDescription() { return "Simple Coffee"; }
}

class CoffeeDecorator {
    private coffee: SimpleCoffee;
    constructor(coffee: SimpleCoffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost();
    }

    getDescription() {
        return this.coffee.getDescription();
    }
}

class MilkDecorator extends CoffeeDecorator {
    getCost() {
        return super.getCost() + 2;
    }

    getDescription() {
        return super.getDescription() + ", Milk";
    }
}

class SugarDecorator extends CoffeeDecorator {
    getCost() {
        return super.getCost() + 1;
    }

    getDescription() {
        return super.getDescription() + ", Sugar";
    }
}

let myCoffee = new SimpleCoffee();
console.log(myCoffee.getDescription());
console.log(`Total: $${myCoffee.getCost()}`);



myCoffee = new MilkDecorator(myCoffee);
console.log(myCoffee.getDescription());
console.log(`Total: $${myCoffee.getCost()}`);



myCoffee = new SugarDecorator(myCoffee);
console.log(myCoffee.getDescription());
console.log(`Total: $${myCoffee.getCost()}`);