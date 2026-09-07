================================================================================
                DAY 2: ABSTRACT FACTORY DESIGN PATTERN
================================================================================

1. WHAT IS A DESIGN PATTERN?
--------------------------------------------------------------------------------
A design pattern is a reusable, proven solution to a recurring problem in
software design. It acts as an architectural template to write code that is
flexible, maintainable, loosely coupled, and easy to extend.

Categories:
1. Creational: Focuses on object creation mechanisms.
2. Structural: Focuses on class/object composition and structure.
3. Behavioral: Focuses on communication between objects.


2. WHAT IS THE ABSTRACT FACTORY PATTERN?
--------------------------------------------------------------------------------
The Abstract Factory Pattern belongs to the Creational group.
Its primary goal is to provide an interface for creating FAMILIES of related
or dependent objects without specifying their concrete classes.

Key concept: "FAMILIES OF PRODUCTS"
- Factory Pattern creates ONE product (e.g. Notification).
- Abstract Factory Pattern creates a WHOLE SUITE of related products that belong
  together (e.g. Button + CheckBox + TextField for Windows or Mac).


3. REAL-WORLD ANALOGY
--------------------------------------------------------------------------------
Think of Furniture Shopping:
- You want to furnish your living room with a Sofa + CoffeeTable + Chair.
- Furniture comes in styles (families):
  - Victorian Family: VictorianSofa + VictorianCoffeeTable + VictorianChair
  - Modern Family: ModernSofa + ModernCoffeeTable + ModernChair
- You do NOT want to mix a Modern Sofa with a Victorian CoffeeTable!
- The Abstract Factory ensures that when you order from the "ModernFurnitureFactory",
  all furniture pieces returned belong to the same matching style family.


4. THE PROBLEM (WITHOUT ABSTRACT FACTORY - issue code.ts)
--------------------------------------------------------------------------------
1. Direct Dependency on Concrete Classes:
   `Application` imports and uses `new WindowsButton()` and `new WindowsCheckBox()`
   directly.

2. Risk of Incompatible Mixing:
   Without a central family factory, developer error could easily instantiate a
   `WindowsButton` alongside a `MacCheckBox`.

3. Violates Open/Closed Principle (OCP):
   If we introduce a new OS platform like "Linux", we are forced to modify the
   existing `Application` constructor with another `else if` branch.


5. HOW ABSTRACT FACTORY FIXES IT (pattern code.ts)
--------------------------------------------------------------------------------
1. Abstract Factory Interface (`GUIFactory`):
   Defines the family blueprint (`createButton()`, `createCheckBox()`).

2. Concrete Factories (`WindowsFactory`, `MacFactory`):
   Each concrete factory creates only products belonging to its family.
   `WindowsFactory` creates `WindowsButton` + `WindowsCheckBox`.
   `MacFactory` creates `MacButton` + `MacCheckBox`.

3. Client Isolation (`Application`):
   The `Application` receives a `GUIFactory` via dependency injection.
   It never calls `new` on concrete product classes.
   It works purely through interfaces (`Button`, `CheckBox`, `GUIFactory`).

4. 100% Extensible:
   Adding Linux only requires creating `LinuxButton`, `LinuxCheckBox`, and
   `LinuxFactory`. The `Application` code remains completely untouched!


6. FACTORY PATTERN vs ABSTRACT FACTORY PATTERN
--------------------------------------------------------------------------------
+-----------------------+------------------------------------------------------+
| Factory Pattern       | Creates a single product (e.g. SMS vs Email)        |
+-----------------------+------------------------------------------------------+
| Abstract Factory      | Creates a family of related products that must match |
|                       | (e.g. Windows Button + Windows CheckBox)             |
+-----------------------+------------------------------------------------------+


7. SUMMARY & INTERVIEW TAKEAWAY
--------------------------------------------------------------------------------
- When should you use Abstract Factory?
  When your system needs to be independent of how its products are created,
  and you have multiple families of related products that must be used together.
- Main benefits:
  1. Guarantees products from the same family are compatible.
  2. Decouples client code from concrete implementations.
  3. Strict adherence to Single Responsibility and Open/Closed Principles.
