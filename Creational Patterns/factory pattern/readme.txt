================================================================================
                    DAY 1: FACTORY DESIGN PATTERN
================================================================================

1. WHAT IS A DESIGN PATTERN?
--------------------------------------------------------------------------------
A design pattern is a reusable, battle-tested solution to a commonly occurring
problem in software design. It is not a specific library or piece of code, but
a blueprint or template for solving architectural problems in a clean,
maintainable, and scalable way.

Design patterns are categorized into 3 main groups:
1. Creational Patterns: How objects are created (e.g., Factory, Abstract Factory, Singleton).
2. Structural Patterns: How classes and objects are composed (e.g., Adapter, Decorator, Facade).
3. Behavioral Patterns: How objects communicate and assign responsibilities (e.g., Strategy, Observer).


2. WHAT IS THE FACTORY PATTERN?
--------------------------------------------------------------------------------
The Factory Pattern belongs to the Creational group.
Its primary goal is to delegate object creation away from the client code into
a dedicated method or class called a "Factory".

Instead of calling `new SendSMS()` or `new SendEmail()` directly in your
business logic, you ask the Factory to provide the object you need.


3. REAL-WORLD ANALOGY
--------------------------------------------------------------------------------
Think of a Restaurant:
- You (the Client) do not go into the kitchen and make a pizza yourself.
- You place an order with the Waiter/Kitchen (the Factory): "Give me a Margherita Pizza".
- The kitchen knows how to prepare and bake the pizza, and hands you the finished dish.
- If the restaurant adds a new pizza flavor to the menu, your way of ordering does not break.


4. THE PROBLEM (WITHOUT FACTORY PATTERN - issue code.ts)
--------------------------------------------------------------------------------
1. Tight Coupling:
   The `NotificationService` directly uses `new SendEmail()` and `new SendSMS()`.
   It is tightly bound to concrete classes.

2. Violates Open/Closed Principle (OCP from SOLID):
   Software entities should be open for extension, but closed for modification.
   In `issue code.ts`, every time a new channel (e.g., WhatsApp, Slack) is added,
   we must open and modify `NotificationService` to add more `if-else` branches.

3. Mixed Responsibilities:
   The service mixes business logic (sending notifications) with creation logic
   (how to instantiate each notification type).


5. HOW FACTORY PATTERN FIXES IT (pattern code.ts)
--------------------------------------------------------------------------------
1. Common Interface (`Notification`):
   All notification types implement the same interface with `notifyUser()`.

2. Centralized Creation (`NotificationFactory`):
   All `new` operations are moved into `NotificationFactory.create(type)`.

3. Loose Coupling:
   The client `NotificationService` only knows about the `Notification` interface
   and the Factory. It has no direct dependency on concrete classes.

4. Easy Maintenance:
   To add WhatsApp, you create the class and register it in the Factory.
   The calling client code never has to change.


6. SUMMARY & INTERVIEW TAKEAWAY
--------------------------------------------------------------------------------
- What problem does it solve?
  Removes direct object instantiation from business logic.
- When should you use it?
  When you don't know ahead of time the exact types and dependencies of the
  objects your code will work with, or when you want to centralize object creation.
- Quick Distinction:
  - Simple Factory (used here): A single class with a switch/if-else that returns objects.
  - Factory Method (GoF): Subclasses override a factory method to decide which class to instantiate.
