# Decorator Pattern (Structural)

Attaches additional responsibilities and behaviors to an object dynamically at runtime without altering its underlying structure or relying on subclass explosion.

---

### The Problem (`issue code.ts`)
- **Class Explosion:** Every combination of features requires a distinct subclass (`CoffeeWithMilk`, `CoffeeWithSugar`, `CoffeeWithMilkAndSugar`). Adding more condiments exponentially increases the number of classes.
- **Static Inheritance:** Behaviors are locked in at compile-time via subclassing, preventing dynamic stacking, modification, or removal of behaviors at runtime.
- **Violates OCP & High Maintenance:** Introducing a new option or altering pricing/descriptions requires creating new combination subclasses and updating existing ones.

### The Solution (`pattern code.ts`)
- **Composition over Inheritance:** Wraps the target object (`SimpleCoffee`) inside decorator objects that share the same interface/methods.
- **Base Decorator (`CoffeeDecorator`):** Maintains a reference to a wrapped component and delegates default calls (`getCost()`, `getDescription()`) to it.
- **Dynamic Behavior Augmentation:** Concrete decorators (`MilkDecorator`, `SugarDecorator`) extend the base decorator to add costs and append descriptions dynamically at runtime by stacking decorators onto one another.

### Key Takeaway
Use when you need to dynamically add or compose responsibilities on individual objects at runtime without creating an unmanageable explosion of subclasses.
