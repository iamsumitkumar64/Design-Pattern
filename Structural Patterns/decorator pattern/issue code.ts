class SimpleCoffee {
    getCost() { return 10; }
    getDescription() { return "Simple Coffee"; }
}

class CoffeeWithMilk extends SimpleCoffee {
    getCost() { return super.getCost() + 2; }
    getDescription() { return super.getDescription() + ", Milk"; }
}

class CoffeeWithSugar extends SimpleCoffee {
    getCost() { return super.getCost() + 1; }
    getDescription() { return super.getDescription() + ", Sugar"; }
}

class CoffeeWithMilkAndSugar extends CoffeeWithMilk {
    getCost() { return super.getCost() + 3; }
    getDescription() { return super.getDescription() + ", Sugar"; }
}
let order;

order = new CoffeeWithMilk();
console.log(`${order.getDescription()} costs $${order.getCost()}`);

order = new CoffeeWithMilkAndSugar();
console.log(`${order.getDescription()} costs $${order.getCost()}`);