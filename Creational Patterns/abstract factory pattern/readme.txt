Issues Without Abstract Factory Pattern ->
1. Tight Coupling as Application directly creates concrete products like WindowButton, MacButton, etc.
2. Violation of Open/Closed Principle from SOLID Principle because adding a new product family requires modifying existing Application logic.
3. If a new platform/family is introduced, the if-else conditions keep growing and make the Application class messy.
4. Difficult to maintain because the creation logic of related products is mixed with the Application/business logic.
5. Risk of creating incompatible products because there is no central structure to ensure that related products belong to the same family.

Abstract Factory Pattern Fix ->
1. Loose Coupling as Application depends on Abstract Factory and Product Interfaces instead of concrete classes.
2. Creation logic is separated from Application and moved into Concrete Factories.
3. If a new product family is introduced, we can create a new Factory without modifying the existing Application code.
4. Related products like Button + CheckBox can be created as a consistent family.
5. Follows Open/Closed Principle because existing Application code does not need to change when a new family is added.
6. Makes the code easier to maintain, extend, and test.
